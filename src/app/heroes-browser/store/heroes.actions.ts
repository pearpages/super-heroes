import { SuperHero } from './../models/super-hero';
import { Hero } from './../models/hero';
import { Action } from '@ngrx/store';

export const ADD_HEROES = '[Heroes Browser] Add Heroes';
export const UPDATE_FILTER = '[Heroes Browser] Update Filter';
export const SELECT_HERO = '[Heroes Browser] Select Hero';
export const UNSELECT_HERO = '[Heroes Browser] Unselect Hero';
export const SHOW_DETAILS = '[Heroes Browser] Show Details';
export const HIDE_DETAILS = '[Heroes Browser] Hide Details';

export class AddHeroes implements Action {
    readonly type = ADD_HEROES;
    constructor(public payload: {heroes: SuperHero[], offset: number}) {}
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

export class ShowDetails implements Action {
    readonly type = SHOW_DETAILS;
}

export class HideDetails implements Action {
    readonly type = HIDE_DETAILS;
}