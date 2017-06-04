import { Hero } from './hero';

export interface HeroesData {
    offset: number,
    heroes: Hero[],
    filter: string,
    selected: number
}