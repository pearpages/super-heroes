export class Query {
    constructor(public filter: string, public offset: number,public limit = 50) {}

    getQueryString() {
        if(this.filter.length > 0) {
            return `nameStartsWith=${this.filter}&limit=${this.limit}&offset=${this.offset}`;
        } else {
            return `limit=${this.limit}&offset=${this.offset}`;
        }

    }
}