import { DetailsBarComponent } from './components/details-bar/details-bar.component';
import { heroes } from './store/heroes.reducer';
import { HeroesService } from './services/heroes.service';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HeroesGridComponent } from './components/heroes-grid/heroes-grid.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({heroes}),
    InfiniteScrollModule
  ],
  declarations: [FilterComponent, CharacterCardComponent, HeroesGridComponent, DetailsBarComponent, DetailsComponent],
  exports: [FilterComponent, HeroesGridComponent,DetailsBarComponent,DetailsComponent],
  providers: [HeroesService]
})
export class HeroesBrowserModule { }
