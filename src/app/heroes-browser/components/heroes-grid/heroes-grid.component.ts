import { LoadMore } from './../../store/heroes.actions';
import { Store } from '@ngrx/store';
import { Hero } from './../../models/hero';
import { Observable } from 'rxjs/Rx';
import { HeroesData } from './../../models/heroes-data';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.scss']
})
export class HeroesGridComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroes: HeroesService,private _store: Store<HeroesData>) {
  }

  ngOnInit() {
    this._heroes.getHeroes().subscribe((d) => {
      this.heroes = d.list;
     });
  }

  onScroll() {
    this._store.dispatch(new LoadMore());
  }
}
