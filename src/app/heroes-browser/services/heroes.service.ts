import { HeroesData } from './../models/heroes-data';
import { Observable } from 'rxjs/Rx';
import * as actions from '../store/heroes.actions';
import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroesStore } from './../store/heroes-store';
import * as response1 from './response1.json';
import * as response2 from './response2.json';
import * as response3 from './response3.json';

const _heroes: Hero[] = _loadJson();;

@Injectable()
export class HeroesService {
  heroes$: Observable<HeroesData> = this._store.select('heroes');
  heroes: HeroesData;

  constructor(private _store: Store<HeroesStore>) {
    this.heroes$.subscribe((d) => this.heroes = d);
    this._store.dispatch(new actions.AddHeroes(_loadOffset(0)));
  }

  getHeroes(): Observable<HeroesData> {
    return this.heroes$;
  }

  getMoreHeroes() {
    this._store.dispatch(new actions.AddHeroes(_loadOffset(this.heroes.offset)));
  }

}

function _loadJson(): Hero[] {
  const res1 = (<any>response1);
  const res2 = (<any>response2);
  const res3 = (<any>response3);
  const res = [].concat(res1.data.results, res2.data.results, res3.data.results);
  return res;
}

function _loadOffset(index: number) {
  return _heroes.slice(index, index+50);
}