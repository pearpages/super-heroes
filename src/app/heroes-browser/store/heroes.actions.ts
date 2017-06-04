import { Hero } from './../models/hero';
import { Action } from '@ngrx/store';

export const ADD_HEROES = '[Heroes Browser] Add Heroes';
export const UPDATE_FILTER = '[Heroes Browser] Update Filter';
export const SELECT_HERO = '[Heroes Browser] Select Hero';
export const UNSELECT_HERO = '[Heroes Browser] Unselect Hero';

export class AddHeroes implements Action {
    readonly type = ADD_HEROES;
    constructor(public payload: Hero[]) {}
}

export class UpdateFilter implements Action {
    readonly type = UPDATE_FILTER;
    constructor(public payload: string) {}
}

export class SelectHero implements Action {
    readonly type = SELECT_HERO;
    constructor(public payload: Hero) {}
}

export class UnselectHero implements Action {
    readonly type = UNSELECT_HERO;
}