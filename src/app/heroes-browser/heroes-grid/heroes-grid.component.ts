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
    this.heroes = this._heroes.fakeData(50);
  }

  ngOnInit() {
  }

}
