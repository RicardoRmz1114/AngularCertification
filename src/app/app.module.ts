import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesToolbarComponent } from './components/countries-toolbar/countries-toolbar.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { ApiInterceptor } from './interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CountriesToolbarComponent,
    ResultsTableComponent,
    TeamsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
