import { HeroesService } from './heroes-browser/services/heroes.service';
import { HeroesStore } from './heroes-browser/store/heroes.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  state: HeroesStore;

  constructor(private _store: Store<HeroesStore>, private _heroes: HeroesService) {
    this._store.select('heroes').subscribe((d) => this.state = <HeroesStore>d);
  }

  ngOnInit() {
    this._heroes.loadMore();
  }

}
