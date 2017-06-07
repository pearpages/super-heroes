import { SuperHero } from './../../models/super-hero';
import { HeroesService } from './../../services/heroes.service';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesGridComponent {

  @Input() heroes: SuperHero[] = [];

  constructor(private _heroes: HeroesService) { }

  onScroll() {
    this._heroes.loadMore();
  }
}
