import { MyCacheService } from './services/my-cache.service';
import { HttpModule } from '@angular/http';
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
import { LoadingComponent } from './components/loading/loading.component';
import { MiniCardComponent } from './mini-card/mini-card.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({heroes}),
    HttpModule,
    InfiniteScrollModule
  ],
  declarations: [FilterComponent, CharacterCardComponent, HeroesGridComponent, DetailsBarComponent, DetailsComponent, LoadingComponent, MiniCardComponent],
  exports: [FilterComponent, HeroesGridComponent,DetailsBarComponent,DetailsComponent, LoadingComponent],
  providers: [HeroesService,MyCacheService]
})
export class HeroesBrowserModule { }
