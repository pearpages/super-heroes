import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class MyCacheService {

  constructor(private _http: Http) { }

  get(url: string): Observable<any> {
    const res = window.localStorage.getItem(url);
    if (res === null) {
      return this._http.get(url)
        .map((res: Response) => {
          const json = res.json().data.results;
          window.localStorage.setItem(url, JSON.stringify(json));
          return json;
        });
    } else {
      const json = JSON.parse(res);
      return Observable.create((observer) => {
        observer.next(json);
        observer.complete();
      });
    }

  }

}
