import { HeroesData } from './../models/heroes-data';
import { Hero } from './../models/hero';
import { Action, ActionReducer } from '@ngrx/store';
import * as actions from './heroes.actions';

const defaultData = {
    heroes: [],
    offset: 0,
    filter: ''
};

export const heroes: ActionReducer<HeroesData> = function (state: HeroesData = defaultData, action: Action) {
    switch (action.type) {
        case actions.ADD_HEROES:
            return Object.assign({}, state, {
                heroes: [...state.heroes, ...action.payload],
                offset: (state.offset + action.payload.length)
            });
        case actions.UPDATE_FILTER:
            return Object.assign({}, state, {filter: action.payload});
        default:
            return state;
    }
};