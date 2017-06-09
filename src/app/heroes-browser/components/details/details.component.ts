import { HeroesService } from './../../services/heroes.service';
import { SuperHero } from './../../models/super-hero';
import { Store } from '@ngrx/store';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  removeFavorite() {
    this._heroes.removeFavorite(this.selected);
  }

  getDescription() {
    return (this.selected.description) ? this.selected.description : 'No Description Available in the Database.'
  }

  getDetails() {
    if (this.selected) {
      if (this.selected['related'] !== undefined) {
        return this.selected['related'];
      }
    }
    return undefined;
  }

  isFavorite() {
    if (this.selected === undefined) {
      return false;
    } else {
      return this._heroes.isFavorite(this.selected.id);
    }
  }

  hasComics(): boolean {
    if (this.selected) {
      if (this.selected['comics']) {
        if (this.selected['comics'].length > 0) {
          return true;
        }
      }
    }
    return false;
  }

  hasSeries(): boolean {
    if (this.selected) {
      if (this.selected['seriesList']) {
        if (this.selected['seriesList'].length > 0) {
          return true;
        }
      }
    }
    return false;
  }
}
