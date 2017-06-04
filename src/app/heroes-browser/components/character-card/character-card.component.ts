import { Hero } from './../../models/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass']
})
export class CharacterCardComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  getThumbnail() {
    return this.hero.thumbnail.path+'.'+this.hero.thumbnail.extension;
  }
}
