import { SuperHero } from './../../models/super-hero';
import { HideDetails } from './../../store/heroes.actions';
import { HeroesStore } from './../../store/heroes.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  state: HeroesStore;

  constructor(private _store: Store<HeroesStore>) { }

  ngOnInit() {
    this._store.select('heroes').subscribe((d: HeroesStore) => {
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
