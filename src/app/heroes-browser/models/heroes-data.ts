import { SuperHero } from './super-hero';

export interface HeroesData {
    offset: number,
    heroes: SuperHero[],
    filter: string,
    selected: SuperHero,
    details: boolean
}