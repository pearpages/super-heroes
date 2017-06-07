import { HeroesService } from './../../services/heroes.service';
import { SuperHero } from './../../models/super-hero';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() selected: SuperHero;

  constructor(private _heroes: HeroesService) { }

  closeDetails() {
    this._heroes.hideDetails();
  }

  saveFavorite() {
    this._heroes.saveFavorite(this.selected);
  }

  getDetails() {
    if(this.selected) {
      if (this.selected['related'] !== undefined) {
        return this.selected['related'];
      }
    }
    return undefined;
  }
}
