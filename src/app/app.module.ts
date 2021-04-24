import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LodaingComponent } from './lodaing/lodaing.component';
import { SelectorButtonsComponent } from './selector-buttons/selector-buttons.component';
import { HistogramComponent } from './histogram/histogram.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    LodaingComponent,
    SelectorButtonsComponent,
    HistogramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
