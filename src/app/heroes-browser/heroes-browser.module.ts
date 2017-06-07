import { HttpModule } from '@angular/http';
import { DetailsBarComponent } from './components/details-bar/details-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HeroesGridComponent } from './components/heroes-grid/heroes-grid.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './components/details/details.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { RelatedHeroesComponent } from './components/related-heroes/related-heroes.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InfiniteScrollModule
  ],
  declarations: [FilterComponent, CharacterCardComponent, HeroesGridComponent, DetailsBarComponent, DetailsComponent, LoadingComponent, MiniCardComponent, RelatedHeroesComponent],
  exports: [FilterComponent, HeroesGridComponent,DetailsBarComponent,DetailsComponent, LoadingComponent]
})
export class HeroesBrowserModule { }
