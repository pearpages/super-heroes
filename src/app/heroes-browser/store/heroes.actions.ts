import { Hero } from './../models/hero';
import { Action } from '@ngrx/store';

export const ADD_HEROES = '[Heroes Browser] Add Heroes';

export const GET_OFFSET = '[Heroes Browser] Get Offset';

export class AddHeroes implements Action {
    readonly type = ADD_HEROES;
    constructor(public payload: Hero[]) {}
}