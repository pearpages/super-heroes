import { SelectHero } from './../../store/heroes.actions';
import { HeroesStore } from './../../store/heroes-store';
import { Store } from '@ngrx/store';
import { Hero } from './../../models/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private _store:Store<HeroesStore>) { }

  ngOnInit() {
  }

  getThumbnail() {
    return this.hero.thumbnail.path+'.'+this.hero.thumbnail.extension;
  }

  showDetails(id:number) {
    this._store.dispatch(new SelectHero(id));
  }
}
