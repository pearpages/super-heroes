import { HeroesService } from './../heroes.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.sass']
})
export class HeroesGridComponent implements OnInit {

  heroes: Hero[];

  constructor(private _heroes: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this._heroes.fakeData(50);
  }

  onScroll() {
    this.heroes = this.heroes.concat(this._heroes.fakeData(50));
    console.log('loaded');
  }
}
