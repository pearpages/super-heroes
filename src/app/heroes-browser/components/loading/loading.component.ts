import { Store } from '@ngrx/store';
import { HeroesStore } from './../../store/heroes.store';
import { Component, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {

  @Input() loading: boolean = false;

  constructor() { }

}
