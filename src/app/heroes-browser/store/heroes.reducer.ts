import { Hero } from './../models/hero';
import {Action, ActionReducer} from '@ngrx/store';
import * as actions from './heroes.actions';

export const heroes: ActionReducer<Hero[]> = function (state:Hero[] = [], action:Action) {
    switch(action.type) {
        case actions.ADD_HEROES:
            return [...state,...action.payload];
        default:
            return state;
    }
};