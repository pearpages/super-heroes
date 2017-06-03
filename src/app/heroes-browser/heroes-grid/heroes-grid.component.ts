import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.sass']
})
export class HeroesGridComponent implements OnInit {

  heroes: Hero[];

  constructor() {
    this.heroes = this._fakeData();
  }

  private _fakeData(): Hero[] {
    const total = 50;
    const res = [];
    for (let i = 0; i < 200; i++) {
      res.push({
        favourite: Math.ceil(Math.random() * 2) === 2 ? true: false,
        main: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quis quae. Sapiente possimus fuga expedita nam temporibus officiis laborum id!",
        footer: "Lorem ipsum dolor sit amet."
      })
    }
    return res;
  }

  ngOnInit() {
  }

}
