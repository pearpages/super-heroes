import { SuperHero } from './../models/super-hero';
import { Query } from './../models/query';
import { HeroesData } from './../models/heroes-data';
import { Hero } from './../models/hero';
import { Action, ActionReducer } from '@ngrx/store';
import * as actions from './heroes.actions';

const defaultData = {
    list: [],
    query: new Query('', 0),
    selected: undefined,
    details: false,
    scroll: true,
    ids: {}
};

export const heroes: ActionReducer<HeroesData> = function (state: HeroesData = defaultData, action: Action) {
    let newState;
    switch (action.type) {
        case actions.ADD_HEROES:
            const heroes: SuperHero[] = state.list.slice();
            let equal: boolean = true;
            let ids = Object.assign({},state.ids);
            action.payload.heroes.forEach((hero) => {
                if (!hasHero(state, hero)) {
                    heroes.push(hero);
                    ids[hero.id] = hero.id;
                    equal = false;
                }
            });
            if (equal) {
                newState = state;
            } else {
                newState = Object.assign({}, state, {
                    list: heroes,
                    ids: ids
                });
            }
            break;
        case actions.UPDATE_FILTER:
            const scroll = action.payload === '' ? true: false;
            newState = Object.assign({}, state, { query: new Query(action.payload, 0), list: [], ids: {}, scroll: scroll });
            break;
        case actions.LOAD_MORE:
            newState = Object.assign({}, state, { query: new Query(state.query.filter, state.query.offset + 50), scroll: true});
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

function hasHero(state: HeroesData, hero: SuperHero):boolean {
    const res = state.ids[hero.id] !== undefined;
    return res;
}