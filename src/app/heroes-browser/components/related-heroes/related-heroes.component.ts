import { SuperHero } from './../../models/super-hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related-heroes',
  templateUrl: './related-heroes.component.html',
  styleUrls: ['./related-heroes.component.scss']
})
export class RelatedHeroesComponent implements OnInit {

  @Input() selected: SuperHero;

  constructor() { }

  ngOnInit() {
  }

  loading(): boolean {
    return this.selected['related'] === undefined;
  }

}
