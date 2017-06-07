import { HeroData } from './hero-data';
import { Comic } from './comic';

export class SuperHero {

    comics?: Comic[];
    description: string;
    events: any;
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: any;
    stories: any;
    thumbnail: any;
    urls: any[];
    favorite: boolean = false;

    constructor(data: HeroData) {
        this.comics = data.comics;
        this.description = data.description;
        this.events = data.events;
        this.id = data.id;
        this.modified = data.modified;
        this.name = data.name;
        this.resourceURI = data.resourceURI;
        this.series = data.series;
        this.stories = data.stories;
        this.thumbnail = data.thumbnail;
        this.urls = data.urls;
    }

    getThumbnail(): string {
        return this.thumbnail.path + '.' + this.thumbnail.extension;
    }

    getCssClass(): string {
        const path = this.thumbnail.path.split('/');
        const filename = path[path.length - 1];
        let res = 'image-available';
        if (filename === 'image_not_available') {
            res = 'image-not-available';
        } else if (filename === '4c002e0305708') {
            res = 'image-not-available2';
        }
        return res;
    }

    static clone(hero: SuperHero) {
        const props = Object.assign({}, hero);
        return new SuperHero(props);
    }
}