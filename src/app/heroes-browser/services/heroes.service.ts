import { SeriesInterface } from './../models/series-interface';
import { Series } from './../models/series';
import { Related } from './../models/related';
import { CacheData } from './../models/cache-data';
import { AddRelated, SelectHero, UnselectHero, ShowDetails, HideDetails, AddFavorites, OnlyFavorites, AddAll, AddComicsToSelected, AddSeriesToSelected } from './../store/heroes.actions';
import { Query } from './../models/query';
import { HeroData } from './../models/hero-data';
import { MyCacheService } from './my-cache.service';
import { ComicInterface } from './../models/comic-interface';
import { Comic } from './../models/comic';
import { SuperHero } from './../models/super-hero';
import { Observable } from 'rxjs/Rx';
import * as actions from '../store/heroes.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroesStore } from './../store/heroes.store';
import { Subscription } from 'rxjs/Subscription';

const apikey = '2ffa799140459e091b3ee3bcb05531e7';
const url = 'https://gateway.marvel.com:443/v1/public';

@Injectable()
export class HeroesService {

  state: HeroesStore;
  lastSearch: Subscription;

  constructor(private _store: Store<HeroesStore>, private _myCache: MyCacheService) {
    this._store.select('heroes').subscribe(d => this.state = <HeroesStore>d);
  }

  private _getCharacter(id: number): Observable<CacheData> {
    return this._myCache.get('character', `${url}/characters/${id}?apikey=${apikey}`);
  }

  private _getSearch(query: Query): Observable<CacheData> {
    return this._myCache.get('characters', `${url}/characters?apikey=${apikey}&${query.getQueryString()}`);
  }

  private _getComics(id: number): Observable<CacheData> {
    return this._myCache.get('comics', `${url}/characters/${id}/comics?apikey=${apikey}&limit=20`)
  }

  private _getSeries(id: number): Observable<CacheData> {
    return this._myCache.get('comics', `${url}/characters/${id}/series?apikey=${apikey}&limit=20`);
  }

  private _addComics(id: number) {
    this._getComics(id)
      .map((data: CacheData) => {
        return data.data.map(_mapComics);
      })
      .subscribe((d: Comic[]) => {
        this._store.dispatch(new AddComicsToSelected(d));
      });
  }

  private _addSeries(id: number) {
    this._getSeries(id)
      .map((data: CacheData) => {
        return data.data.map(_mapSeries);
      })
      .subscribe((series: Series[]) => {
        this._store.dispatch(new AddSeriesToSelected(series));
      });
  }

  private _addRelated(url: string) {
    this._myCache.get('related', `${url}?apikey=${apikey}`)
      .subscribe((data: CacheData) => {
        this._mapRelated(data)
          .subscribe((related: Related[]) => {
            this._store.dispatch(new AddRelated(related));
          });
      });
  }

  getImage(id: number): Observable<string> {
    const h: SuperHero = this.state.all[id];
    if (h) {
      return Observable.create((observer) => {
        observer.next(h.getThumbnail());
        observer.complete();
      });
    } else {
      return this._getCharacter(id)
        .map((data) => {
          return data.data[0].thumbnail.path + '.' + data.data[0].thumbnail.extension;
        });
    }
  }

  loadMore() {
    if (this.state.scrolled === false && !this.state.onlyFavorites) {
      this._store.dispatch(new actions.Scrolled());
      this._search();
    }
  }

  search(value: string) {
    this._store.dispatch(new actions.UpdateFilter(value));
    this._search();
  }

  private _mapMoreHeroes(data: CacheData) {
    const heroes = data.data.map(_mapHeroes);
    this._store.dispatch(new actions.AddHeroes({ heroes }));
  }

  private _search() {
    if (this.lastSearch !== undefined) {
      this.lastSearch.unsubscribe();
    }
    this.lastSearch = this._getSearch(this.state.query)
      .subscribe((data) => this._mapMoreHeroes(data));
  }

  clearCache(): Promise<boolean> {
    return this._myCache.clearCache();
  }

  showDetails() {
    this._store.dispatch(new ShowDetails());
  }

  loadFavorites(): Observable<CacheData> {
    return this._myCache.get('favorites')
      .map((data) => {
        const favorites = (data.data === null) ? [] : data.data;
        this._store.dispatch(new AddFavorites(favorites));
        return data;
      });
  }

  isFavorite(id: number): boolean {
    return (this.state.favorites.find((x) => x.id === id) !== undefined);
  }

  saveFavorite(hero: SuperHero) {
    const key = 'favorites';
    this._myCache.get(key)
      .switchMap((d: CacheData) => {
        const favorites = d.data || [];
        if (favorites.length === 0 || favorites.find((x) => x.id === hero.id) === undefined) {
          favorites.push(hero);
          return this._myCache.set(key, favorites);
        } else {
          return Observable.create((observer) => { observer.next(d); observer.cmplete(); });
        }
      }).subscribe((data: CacheData) => {
        this._store.dispatch(new AddFavorites(data.data));
      });
  }

  removeFavorite(hero: SuperHero) {
    const key = 'favorites';
    this._myCache.get(key)
      .switchMap((d: CacheData) => {
        const favorites = d.data || [];
        if (favorites.length === 0 || favorites.find((x) => x.id === hero.id) === undefined) {
          return Observable.create((observer) => { observer.next({ type: 'void', data: null }); observer.complete(); });
        } else {
          const toRemove = favorites.find((x) => x.id === hero.id);
          const i = favorites.indexOf(toRemove);
          return this._myCache.set(key, [...favorites.slice(0, i), ...favorites.slice(i + 1, favorites.length)]);
        }
      }).subscribe((data: CacheData) => {
        if (data.type !== 'void') {
          this._store.dispatch(new AddFavorites(data.data));
        }
      });
  }

  showFavorites() {
    this._store.dispatch(new OnlyFavorites());
  }

  isShowingFavorites(): boolean {
    return this.state.onlyFavorites;
  }

  selectHero(id?: number) {
    if (id === undefined) {
      this._store.dispatch(new UnselectHero());
    } else {
      const hero = this.state.all[id];
      this._store.dispatch(new SelectHero(hero));
      this._addRelated(this.state.selected.series.collectionURI);
      this._addComics(this.state.selected.id);
      this._addSeries(this.state.selected.id);
    }
  }

  private _mapRelated(data: CacheData): Observable<Related[]> {
    let res: Related[] = [];
    let observables: Observable<any>[] = [];
    data.data.forEach((serie) => {
      serie['characters']['items'].forEach((c) => {
        let id = parseInt(c.resourceURI.split('/').pop());
        const e: Related = { name: c.name, id: id };
        if (!res.find((x) => x.id === e.id) && !_selected(this.state, id)) {
          res.push(e)
        }
        if (this.state.all[id] === undefined) {
          observables.push(this._getCharacter(id));
        }
      });
    });
    if (observables.length > 0) {
      return Observable.combineLatest(...observables)
        .map((res: CacheData[]) => {
          const heroes = res.map(data => {
            return new SuperHero(data.data[0]);
          });
          this._store.dispatch(new AddAll(heroes));
          return true;
        })
        .map(() => res);
    } else {
      return _makeDummyObservable(res);
    }

  }

  hideDetails() {
    this._store.dispatch(new HideDetails());
  }

}

function _makeDummyObservable(data): Observable<any> {
  return Observable.create((observer) => {
    observer.next(data);
    observer.complete();
  });
}

function _mapHeroes(data: HeroData): SuperHero {
  const h: SuperHero = new SuperHero(data);
  return h;
}

function _mapComics(data: ComicInterface): Comic {
  return new Comic(data);
}

function _mapSeries(data: SeriesInterface): Series {
  return new Series(data);
}

function _selected(state: any, id: number) {
  if (state) {
    if (state.selected === undefined) {
      return false;
    } else {
      return state.selected.id === id;
    }
  } else {
    return false;
  }
}