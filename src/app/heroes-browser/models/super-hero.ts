import { Hero } from './hero';

export class SuperHero {

    comics: any;
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

    constructor(data: Hero) {
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

    getThumbnail() {
        return this.thumbnail.path + '.' + this.thumbnail.extension;
    }
}