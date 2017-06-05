import { ComicInterface } from './comic-interface';

export class Comic {
    characters: Object;
    collectedIssues: any[];
    collections: any[];
    creators: Object;
    dates: any[];
    description: string;
    diamondCode: string;
    digitalId: number;
    ean: string;
    events: Object;
    format: string;
    id: number;
    images: any[];
    isbn: string;
    issn: string;
    issueNumber: number;
    modified: string;
    pageCount: number;
    prices: any[];
    resourceURI: string;
    series: Object;
    stories: Object;
    textObjects: any[];
    thumbnail: Object;
    title: string;
    upc: string;
    urls: any[];
    variantDescription: string;
    variants: any[];
    constructor(data: ComicInterface) {
        this.characters = data.characters;
        this.collectedIssues = data.collectedIssues;
        this.collections = data.collectedIssues;
        this.creators = data.creators;
        this.dates = data.dates;
        this.description = data.description;
        this.diamondCode = data.diamondCode;
        this.digitalId = data.digitalId;
        this.ean = data.ean;
        this.events = data.events;
        this.format = data.format;
        this.id = data.id;
        this.images = data.images;
        this.isbn = data.isbn;
        this.issn = data.issn;
        this.issueNumber = data.issueNumber;
        this.modified = data.modified;
        this.pageCount = data.pageCount;
        this.prices = data.prices;
        this.resourceURI = data.resourceURI;
        this.series = data.series;
        this.stories = data.stories;
        this.textObjects = data.textObjects;
        this.thumbnail = data.thumbnail;
        this.title = data.title;
        this.upc = data.upc;
        this.urls = data.urls;
        this.variantDescription = data.variantDescription;
        this.variants = data.variants;
    }

    getThumbnail(): string {
        return this.thumbnail['path']+'.'+this.thumbnail['extension'];
    }
}