import { SuperHero } from './../../models/super-hero';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-heroes',
  templateUrl: './related-heroes.component.html',
  styleUrls: ['./related-heroes.component.scss']
})
export class RelatedHeroesComponent {

  @Input() related: SuperHero[];

  constructor() { }

  loading(): boolean {
    return this.related === undefined;
  }

}
