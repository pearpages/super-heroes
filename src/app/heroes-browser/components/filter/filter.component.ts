import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  constructor(private _heroes: HeroesService) { }

  ngOnInit() {
  }

  updateFilter(value) {
    this._heroes.search(value);
  }

  clearCache() {
    this._heroes.clearCache()
      .then(() => alert('Cache cleared'));
  }
}
