import { HeroesStore } from './../store/heroes-store';
import { Observable } from 'rxjs/Rx';
import * as actions from '../store/heroes.actions';
import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class HeroesService {
  heroes$: Observable<Hero[]> = this._store.select('heroes');

  constructor(private _store: Store<HeroesStore>) { }

  getHeroes(): Observable<Hero[]> {
    return this.heroes$;
  }

  getMoreHeroes() {
    this._store.dispatch(new actions.AddHeroes(this._fakeData(50)));
  }

  private _fakeData(total: number): Hero[] {
    const res = [];
    for (let i = 0; i < total; i++) {
      res.push({
        favourite: Math.ceil(Math.random() * 2) === 2 ? true : false,
        main: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quis quae. Sapiente possimus fuga expedita nam temporibus officiis laborum id!",
        footer: "Lorem ipsum dolor sit amet."
      })
    }
    return res;
  }

}
