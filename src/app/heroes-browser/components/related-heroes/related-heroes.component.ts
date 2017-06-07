import { SuperHero } from './../../models/super-hero';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-heroes',
  templateUrl: './related-heroes.component.html',
  styleUrls: ['./related-heroes.component.scss']
})
export class RelatedHeroesComponent {

  @Input() selected: SuperHero;

  constructor() { }

  loading(): boolean {
    return this.selected['related'] === undefined;
  }

}
