import { Store } from '@ngrx/store';
import { HeroesStore } from './../../store/heroes.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading: boolean;

  constructor(private _store: Store<HeroesStore>) { }

  ngOnInit() {
    this._store.select('heroes').subscribe((d) => this.loading = d['loading']);
  }

}
