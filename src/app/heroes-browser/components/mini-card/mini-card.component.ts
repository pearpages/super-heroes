import { SelectHero } from './../../store/heroes.actions';
import { HeroesStore } from './../../store/heroes.store';
import { Store } from '@ngrx/store';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCardComponent implements OnInit {

  @Input() related: {id:string,name: string};

  constructor(private _heroes: HeroesService, private _store: Store<HeroesStore>) { }

  ngOnInit() {
  }

  getImage(id:number) {
    return this._heroes.getImage(id);
  }

  select(id: number) {
    this._store.dispatch(new SelectHero(this._heroes.getHero(id)));
  }
}
