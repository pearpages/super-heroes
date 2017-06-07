import { HeroesBrowserModule } from './heroes-browser/heroes-browser.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { heroes } from './heroes-browser/store/heroes.reducer';
import { StoreModule } from '@ngrx/store';
import { MyCacheService } from './heroes-browser/services/my-cache.service';
import { HeroesService } from './heroes-browser/services/heroes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({heroes}),
    HeroesBrowserModule,
    HttpModule
  ],
  providers: [HeroesService,MyCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
