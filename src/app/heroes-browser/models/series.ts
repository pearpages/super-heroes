import { SeriesInterface } from './series-interface';
export class Series {

    description: string;
    id: number;
    thumbnail: Object;
    title: string;

    constructor(data: SeriesInterface) {
        this.description = data.description;
        this.id = data.id;
        this.thumbnail = data.thumbnail;
        this.title = data.title;
    }

    getThumbnail(): string {
        return this.thumbnail['path'] + '.' + this.thumbnail['extension'];
    }
}