import { HeroesService } from './../../services/heroes.service';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCardComponent{

  @Input() related: {id:string,name: string};

  constructor(private _heroes: HeroesService) { }

  getImage(id:number) {
    return this._heroes.getImage(id);
  }

  select(id: number) {
    this._heroes.selectHeroById(id);
  }
}
