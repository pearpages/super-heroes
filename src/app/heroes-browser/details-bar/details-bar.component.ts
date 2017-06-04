import { UnselectHero } from './../store/heroes.actions';
import { SuperHero } from './../models/super-hero';
import { HeroesStore } from './../store/heroes-store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-bar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.sass']
})
export class DetailsBarComponent implements OnInit {

  selected: SuperHero;

  constructor(private _store:Store<HeroesStore>) { }

  ngOnInit() {
    this._store.select('heroes').subscribe( (h) => {
      this.selected = h['selected'];
    });
  }

  closeBar() {
    this._store.dispatch(new UnselectHero());
  }

}
