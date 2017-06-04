import { Hero } from './../models/hero';
import { Action } from '@ngrx/store';

export const ADD_HEROES = '[Heroew Browser] Add Heroes';

export class AddHeroes implements Action {
    readonly type = ADD_HEROES;
    constructor(public payload: Hero[]) {}
}