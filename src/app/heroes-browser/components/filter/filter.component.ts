import { HeroesStore } from './../../store/heroes.store';
import { Store } from '@ngrx/store';
import { HeroesService } from './../../services/heroes.service';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  @Input() filter: string = '';

  constructor(private _heroes: HeroesService) {}

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

  toggleFavorites() {
    if(this.isShowingFavorites()) {
      this._heroes.search('');
    } else {
      this._heroes.showFavorites();
    }

  }

  getClasses() {
    return this.isShowingFavorites() ? 'btn-fav active btn btn-sm btn-default' : 'btn-fav btn btn-sm btn-default';
  }

  isShowingFavorites() {
    return this._heroes.isShowingFavorites();
  }
}
