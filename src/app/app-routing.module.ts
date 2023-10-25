import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesToolbarComponent } from './components/countries-toolbar/countries-toolbar.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';

const routes: Routes = [
  {
    path: 'standings/:id',
    component: CountriesToolbarComponent
  },
  {
    path: 'team/:id/:id2',
    component: TeamsTableComponent
  },
  {
    path:'**', redirectTo: 'standings/39'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
