import { SuperHero } from './../../models/super-hero';
import { HeroesData } from './../../models/heroes-data';
import { HideDetails } from './../../store/heroes.actions';
import { HeroesStore } from './../../store/heroes-store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  state: HeroesData;

  constructor(private _store: Store<HeroesStore>) { }

  ngOnInit() {
    this._store.select('heroes').subscribe((d: HeroesData) => {
      this.state = d;
    });
  }

  get hero(): SuperHero {
    return this.state['selected'];
  }

  closeDetails() {
    this._store.dispatch(new HideDetails());
  }
}
