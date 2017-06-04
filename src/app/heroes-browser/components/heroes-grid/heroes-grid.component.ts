import { Hero } from './../../models/hero';
import { Observable } from 'rxjs/Rx';
import { HeroesData } from './../../models/heroes-data';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.sass']
})
export class HeroesGridComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroes: HeroesService) {
  }

  ngOnInit() {
    this._heroes.getHeroes().subscribe( (d) => this.heroes = d.heroes);
  }

  onScroll() {
    this._heroes.getMoreHeroes();
  }
}
