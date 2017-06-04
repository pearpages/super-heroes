import { HeroesStore } from './../../store/heroes-store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as actions from '../../store/heroes.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  constructor(private _store: Store<HeroesStore>) { }

  ngOnInit() {
  }

  updateFilter(value) {
    this._store.dispatch(new actions.UpdateFilter(value));
  }
}
