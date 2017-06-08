import { Related } from './../models/related';
import { Query } from './../models/query';
import { SuperHero } from './../models/super-hero';
import { Action } from '@ngrx/store';

export const ADD_HEROES = '[Heroes Browser] Add Heroes';
export const UPDATE_FILTER = '[Heroes Browser] Update Filter';
export const SELECT_HERO = '[Heroes Browser] Select Hero';
export const UNSELECT_HERO = '[Heroes Browser] Unselect Hero';
export const SHOW_DETAILS = '[Heroes Browser] Show Details';
export const HIDE_DETAILS = '[Heroes Browser] Hide Details';
export const SCROLLED = '[Heroes Browser] Scrolled';
export const ADD_RELATED = '[Heroes Browser] Add Related';
export const ADD_FAVORITES = '[Heroes Browser] Add Favorites';
export const ONLY_FAVORITES = '[Heroes Browser] Only Favorites';
export const ADD_ALL = '[Heroes Browser] Add All';

export class AddHeroes implements Action {
    readonly type = ADD_HEROES;
    constructor(public payload: {heroes: SuperHero[]}) {}
}

export class AddAll implements Action {
    readonly type = ADD_ALL;
    constructor(public payload: SuperHero[]) {}
}

export class OnlyFavorites implements Action {
    readonly type = ONLY_FAVORITES;
}

export class Scrolled implements Action {
    readonly type = SCROLLED;
}

export class UpdateFilter implements Action {
    readonly type = UPDATE_FILTER;
    constructor(public payload: string) {}
}

export class SelectHero implements Action {
    readonly type = SELECT_HERO;
    constructor(public payload: SuperHero) {}
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

export class AddRelated implements Action {
    readonly type = ADD_RELATED;
    constructor(public payload: Related[]){}
}

export class AddFavorites implements Action {
    readonly type = ADD_FAVORITES;
    constructor(public payload: number[]) {}
}