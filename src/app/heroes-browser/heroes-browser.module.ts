import { HeroesService } from './services/heroes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HeroesGridComponent } from './components/heroes-grid/heroes-grid.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,InfiniteScrollModule
  ],
  declarations: [FilterComponent, CharacterCardComponent, HeroesGridComponent],
  exports: [FilterComponent, HeroesGridComponent],
  providers: [HeroesService]
})
export class HeroesBrowserModule { }
