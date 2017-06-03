import { HeroesService } from './heroes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { HeroesGridComponent } from './heroes-grid/heroes-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterComponent, CharacterCardComponent, HeroesGridComponent],
  exports: [FilterComponent, HeroesGridComponent],
  providers: [HeroesService]
})
export class HeroesBrowserModule { }
