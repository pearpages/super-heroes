import { AddRelated } from './../store/heroes.actions';
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
import * as comics from './comics-response.json';

const _comics: Comic[] = _loadJsonComics();

const apikey = '2ffa799140459e091b3ee3bcb05531e7';
const url = 'https://gateway.marvel.com:443/v1/public';

@Injectable()
export class HeroesService {
  heroes$: Observable<HeroesStore> = this._store.select('heroes');

  constructor(private _store: Store<HeroesStore>, private _myCache: MyCacheService) {

    this.heroes$.flatMap((state) => {
      if (state.selected) {
        console.log('selected');
        const url = state.selected.series.collectionURI;
        return this._myCache.get(`${url}?apikey=${apikey}`);
      } else {
        console.log('whatever');
        return this._myCache.get(`${url}/characters?apikey=${apikey}&${state.query.getQueryString()}`)
      }
    }).subscribe((data: any[]) => {
      if (data.length > 0) {
        if (!data[0].hasOwnProperty('characters')) {
          const heroes = data.map(_mapHeroes);
          this._store.dispatch(new actions.AddHeroes({ heroes }));
        } else {
          let res = [];
          data.forEach((serie) => {
            serie['characters']['items'].forEach((c) => res.push({ name: c.name, id: parseInt(c.resourceURI.split('/').pop()) }));
          });
          console.log(res);
          this._store.dispatch(new AddRelated(res));
        }
      }
    });
  }
}

function _loadJsonComics(): Comic[] {
  const c = <any>comics;
  return c.data.results.map(_mapComics);
}

function _mapHeroes(data: HeroData): SuperHero {
  const h: SuperHero = new SuperHero(data);
  h.comics = _comics;
  return h;
}

function _mapComics(data: ComicInterface): Comic {
  return new Comic(data);
}