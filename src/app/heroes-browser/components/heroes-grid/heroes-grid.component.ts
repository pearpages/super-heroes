import { Observable } from 'rxjs/Rx';
import { Hero } from './../../models/hero';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.sass']
})
export class HeroesGridComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private _heroes: HeroesService) {
  }

  ngOnInit() {
    this.heroes$ = this._heroes.getHeroes();
    this._heroes.getMoreHeroes();
  }

  onScroll() {
    this._heroes.getMoreHeroes();
  }
}
