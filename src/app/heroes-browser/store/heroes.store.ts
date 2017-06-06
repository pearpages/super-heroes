import { SuperHero } from './../models/super-hero';
import { Query } from './../models/query';

export interface HeroesStore {
    list: SuperHero[],
    query: Query,
    selected: SuperHero,
    details: boolean,
    loading: boolean,
    moreData: boolean,
    all: Object
}