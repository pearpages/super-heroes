import { SuperHero } from './../models/super-hero';
import { CacheData } from './../models/cache-data';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import * as localForage from "localforage";

@Injectable()
export class MyCacheService {

  constructor(private _http: Http) {}

  get(type: string, url?: string): Observable<CacheData> {

    if (url) {
      return this._dealWithUrl(type, url);
    } else {
      return _dealWithData(type);
    }
  }

  set(type: string, data: any): Observable<CacheData> {
    return _saveToCache(type, data).map(() => ({ type, data }));
  }

  clearCache(): Promise<any> {
    return localForage.clear();
  }

  _dealWithUrl(type: string, url: string): Observable<CacheData> {
    return _getFromCache(type + '-' + url)
      .switchMap((res) => {
        if (res === null) {
          return this._askServerAndSaveIt(type, url);
        } else {
          return _makeObservableFromData(type, res);
        }
      });
  }

  _askServerAndSaveIt(type, url): Observable<CacheData> {
    return this._http.get(url)
      .switchMap((res: Response) => {
        const data = res.json().data.results;
        return _saveToCache(type + '-' + url, data)
          .map(() => ({ type, data }));
      });
  }

}

function _dealWithData(type: string): Observable<CacheData> {
  return _getFromCache(type)
    .switchMap((res) => _makeObservableFromData(type, res));
}

function _getFromCache(key: string): Observable<any> {
  return Observable.fromPromise(localForage.getItem(key));
}

function _saveToCache(key: string, data: any): Observable<any> {
  return Observable.fromPromise(localForage.setItem(key, data));

}

function _makeObservableFromData(type: string, data: any): Observable<CacheData> {
  return Observable.create((observer) => {
    observer.next({ type, data });
    observer.complete();
  });
}