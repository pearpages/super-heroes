import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  constructor() { }

  fakeData(total: number): Hero[] {
    const res = [];
    for (let i = 0; i < total; i++) {
      res.push({
        favourite: Math.ceil(Math.random() * 2) === 2 ? true : false,
        main: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quis quae. Sapiente possimus fuga expedita nam temporibus officiis laborum id!",
        footer: "Lorem ipsum dolor sit amet."
      })
    }
    return res;
  }

}
