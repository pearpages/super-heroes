import { HeroesData } from './../models/heroes-data';
import { Hero } from './../models/hero';
import { Action, ActionReducer } from '@ngrx/store';
import * as actions from './heroes.actions';

const defaultData = {
    heroes: [],
    offset: 0,
    filter: '',
    selected: undefined,
    details: false
};

export const heroes: ActionReducer<HeroesData> = function (state: HeroesData = defaultData, action: Action) {
    let newState;
    switch (action.type) {
        case actions.ADD_HEROES:
            newState = Object.assign({}, state, {
                heroes: [...state.heroes, ...action.payload],
                offset: (state.offset + action.payload.length)
            });
            break;
        case actions.UPDATE_FILTER:
            newState = Object.assign({}, state, {filter: action.payload});
            break;
        case actions.SELECT_HERO:
            newState = Object.assign({}, state, {selected: action.payload});
            break;
        case actions.UNSELECT_HERO:
            newState = Object.assign({}, state, {selected: undefined});
            break;
        case actions.SHOW_DETAILS:
            newState = Object.assign({}, state, {details: true});
            break;
        case actions.HIDE_DETAILS:
            newState = Object.assign({}, state, {details: false});
            break;
        default:
            newState = state;
    }
    return newState;
};