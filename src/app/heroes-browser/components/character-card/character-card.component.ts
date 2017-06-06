import { SelectHero } from './../../store/heroes.actions';
import { HeroesStore } from './../../store/heroes.store';
import { Store } from '@ngrx/store';
import { SuperHero } from './../../models/super-hero';
import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent implements OnInit {

  @Input() hero: SuperHero;
  imageLoaded = false;

  constructor(private _store:Store<HeroesStore>) { }

  ngOnInit() {
  }

  showDetails(hero: SuperHero) {
    this._store.dispatch(new SelectHero(hero));
  }

}
