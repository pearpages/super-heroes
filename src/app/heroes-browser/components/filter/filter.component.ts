import { MyCacheService } from './../../services/my-cache.service';
import { HeroesStore } from './../../store/heroes.store';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as actions from '../../store/heroes.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  constructor(private _store: Store<HeroesStore>, private _myCache: MyCacheService) { }

  ngOnInit() {
  }

  updateFilter(value) {
    this._store.dispatch(new actions.UpdateFilter(value));
  }

  clearCache() {
    this._myCache.clearCache().then(() => alert('Cache cleared'));
  }
}
