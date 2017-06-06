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

  constructor(private _heroes: HeroesService) { }

  ngOnInit() {
  }

  getImage(id:number) {
    return this._heroes.getImage(id);
  }

}
