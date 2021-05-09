import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LodaingComponent } from './lodaing/lodaing.component';
import { SelectorButtonsComponent } from './selector-buttons/selector-buttons.component';
import { HistogramComponent } from './histogram/histogram.component';
import { ChartsModule } from 'ng2-charts';
import { ChartTabComponent } from './chart-tab/chart-tab.component';
import { StatsComponent } from './stats/stats.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoPageComponent } from './info-page/info-page.component';
import { StatsDisplayComponent } from './stats-display/stats-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    LodaingComponent,
    SelectorButtonsComponent,
    HistogramComponent,
    ChartTabComponent,
    StatsComponent,
    InfoPageComponent,
    StatsDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
