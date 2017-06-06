import { Query } from './query';
import { SuperHero } from './super-hero';

export interface HeroesData {
    list: SuperHero[],
    query: Query,
    selected: SuperHero,
    details: boolean,
    ids: Object,
    scroll: boolean
}