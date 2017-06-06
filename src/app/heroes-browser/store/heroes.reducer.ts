import { HeroesStore } from './heroes.store';
import { SuperHero } from './../models/super-hero';
import { Query } from './../models/query';
import { Action, ActionReducer } from '@ngrx/store';
import * as actions from './heroes.actions';

const defaultData = {
    list: [],
    query: new Query('', 0),
    selected: undefined,
    details: false,
    loading: true,
    moreData: true
};

export const heroes: ActionReducer<HeroesStore> = function (state: HeroesStore = defaultData, action: Action) {
    let newState;
    switch (action.type) {
        case actions.ADD_HEROES:
            if (!state.loading ) {
                newState = state;
            } else {
                newState = Object.assign({}, state, {
                    list: [...state.list, ...action.payload.heroes],
                    loading: false,
                    moreData: (action.payload.heroes.length === 50)
                });
            }
            break;
        case actions.UPDATE_FILTER:
            newState = Object.assign({}, state, { moreData: true, loading: true, query: new Query(action.payload, 0), list: [] });
            break;
        case actions.LOAD_MORE:
            if (!state.moreData) {
                newState = state;
            } else {
                newState = Object.assign({}, state, { loading: true, query: new Query(state.query.filter, state.query.offset + 50) });
            }
            break;
        case actions.SELECT_HERO:
            newState = Object.assign({}, state, { selected: action.payload });
            break;
        case actions.UNSELECT_HERO:
            newState = Object.assign({}, state, { selected: undefined });
            break;
        case actions.SHOW_DETAILS:
            newState = Object.assign({}, state, { details: true });
            break;
        case actions.HIDE_DETAILS:
            newState = Object.assign({}, state, { details: false });
            break;
        default:
            newState = state;
    }
    return newState;
};
