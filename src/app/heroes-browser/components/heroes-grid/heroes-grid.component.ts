import { SuperHero } from './../../models/super-hero';
import { HeroesStore } from './../../store/heroes.store';
import { LoadMore } from './../../store/heroes.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.scss']
})
export class HeroesGridComponent implements OnInit {

  heroes: SuperHero[] = [];

  constructor(private _heroes: HeroesService, private _store: Store<HeroesStore>) { }

  ngOnInit() {
    this._store.select('heroes')
      .subscribe((d) => {
        this.heroes = d['list'];
      });
  }

  onScroll() {
    this._store.dispatch(new LoadMore());
  }
}
