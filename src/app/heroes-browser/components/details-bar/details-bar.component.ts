import { Http, Response } from '@angular/http';
import { Related } from './../../models/related';
import { HeroesService } from '../../services/heroes.service';
import { SuperHero } from './../../models/super-hero';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-details-bar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsBarComponent {

  @Input() selected: SuperHero = undefined;

  constructor(private _heroes: HeroesService,private _http: Http) { }

  animate(): string {
    return (this.selected) ? 'ready' : '';
  }

  closeBar() {
    this._heroes.selectHero();
  }

  showDetails() {
    this._heroes.showDetails();
  }

  loading(): boolean {
    return this.getRelated() === undefined;
  }

  getRelated(): Related[] {
    return (this.selected) ? this.selected['related'] : undefined;
  }

  isFavorite() {
    if(this.selected === undefined) {
      return false;
    } else {
      return this._heroes.isFavorite(this.selected.id);
    }
  }

  consoleLogDetails() {
    console.log(this.selected);
  }

}
