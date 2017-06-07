import { AddRelated, SelectHero } from './../store/heroes.actions';
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

  getImage(id: number) {
    const h: SuperHero = this.state.all[id];
    if (h) {
      return h.getThumbnail();
    }
  }

  loadMore() {
    if (this.state.scrolled === false) {
      this._store.dispatch(new actions.Scrolled());
      this._search();
    }
  }

  search(value: string) {
    this._store.dispatch(new actions.UpdateFilter(value));
    this._search();
  }

  _mapMoreHeroes(data: { type: string, data: any }) {
    const heroes = data.data.map(_mapHeroes);
    this._store.dispatch(new actions.AddHeroes({ heroes }));
  }

  _search() {
     if(this.lastSearch !== undefined) {
        this.lastSearch.unsubscribe();
      }
      this.lastSearch = this._myCache.get('characters', `${url}/characters?apikey=${apikey}&${this.state.query.getQueryString()}`).subscribe((data) => this._mapMoreHeroes(data));
  }

  clearCache(): Promise<boolean> {
    return this._myCache.clearCache();
  }

  selectHero(hero: SuperHero) {
    this._store.dispatch(new SelectHero(hero));
    const url = this.state.selected.series.collectionURI;
    this._myCache.get('related', `${url}?apikey=${apikey}`).subscribe((data: { type: string, data: any }) => {
      let res = [];
      data.data.forEach((serie) => {
        serie['characters']['items'].forEach((c) => {
          const e = { name: c.name, id: parseInt(c.resourceURI.split('/').pop()) };
          if (!res.find((x) => x.id === e.id)) {
            res.push(e)
          }
        });
      });
      this._store.dispatch(new AddRelated(res));
    });
  }

  getHero(id: number): SuperHero {
    return this.state.all[id];
  }
}

function _mapHeroes(data: HeroData): SuperHero {
  const h: SuperHero = new SuperHero(data);
  return h;
}

function _mapComics(data: ComicInterface): Comic {
  return new Comic(data);
}