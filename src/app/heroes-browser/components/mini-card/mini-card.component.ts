import { Observable } from 'rxjs/Rx';
import { HeroesService } from './../../services/heroes.service';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCardComponent implements OnInit{

  @Input() related: {id:number,name: string};
  image: string;

  constructor(private _heroes: HeroesService) { }

  ngOnInit() {
    this._heroes.getImage(this.related.id).subscribe((image) => {
      this.image = image;
    });
  }

  select(id: number) {
    this._heroes.selectHeroById(id);
  }

  isFavorite():boolean {
    return this._heroes.isFavorite(this.related.id)
  }

  getClasses() {
    return (this.isFavorite()) ? 'mini-card col-3 pull-left p-1 favorite' : 'mini-card col-3 pull-left p-1';
  }
}
