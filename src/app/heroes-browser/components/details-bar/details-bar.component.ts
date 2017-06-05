import { HeroesStore } from './../../store/heroes-store';
import { SuperHero } from './../../models/super-hero';
import { UnselectHero, ShowDetails } from './../../store/heroes.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-bar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.scss']
})
export class DetailsBarComponent implements OnInit {

  selected: SuperHero;

  constructor(private _store:Store<HeroesStore>) { }

  ngOnInit() {
    this._store.select('heroes').subscribe( (h) => {
      setTimeout(() => this.selected = h['selected'],0);
    });
  }

  animate(): string {
    return (this.selected) ? 'ready' : '';
  }

  closeBar() {
    this._store.dispatch(new UnselectHero());
  }

  showDetails() {
    this._store.dispatch(new ShowDetails());
  }

}
