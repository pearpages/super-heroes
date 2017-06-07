import { HeroesStore } from './../../store/heroes.store';
import { Store } from '@ngrx/store';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  filter: string = '';

  constructor(private _heroes: HeroesService, private _store: Store<HeroesStore>) {}

  ngOnInit() {
    this._store.select('heroes')
      .subscribe((d) => this.filter = d['query']['filter']);

  }

  updateFilter(value) {
    this._heroes.search(value);
  }

  clearCache() {
    this._heroes.clearCache()
      .then(() => alert('Cache cleared'));
  }

  removeFilter() {
    this._heroes.search('');
  }
}
