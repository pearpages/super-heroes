import { HeroesService } from './../../services/heroes.service';
import { SuperHero } from './../../models/super-hero';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {

  @Input() hero: SuperHero;
  imageLoaded = false;

  constructor(private _heroes:HeroesService) { }

  showDetails(hero: SuperHero) {
    this._heroes.selectHero(hero);
  }

}
