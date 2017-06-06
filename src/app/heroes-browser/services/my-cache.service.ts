import { SuperHero } from './../models/super-hero';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import * as localForage from "localforage";

@Injectable()
export class MyCacheService {

  constructor(private _http: Http) { }

  get(type: string,url: string): Observable<{ type: string, data: any }> {
    const key = type+'-'+url;

    return Observable.fromPromise(localForage.getItem(key))
      .switchMap((res) => {
        if (res === null) {
          return this._http.get(url)
            .switchMap((res: Response) => {
              const data = res.json().data.results;
              return Observable.fromPromise(localForage.setItem(key, data))
                .map(() => ({type,data}));
            });
        } else {
          return Observable.create((observer) => {
            observer.next({type,data:res});
            observer.complete();
          });
        }
      });

  }

  clearCache(): Promise<any> {
      return localForage.clear();
  }

}
