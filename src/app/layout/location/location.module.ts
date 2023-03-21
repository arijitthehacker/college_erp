import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddStateComponent } from './states/add-state/add-state.component';
import { StatesComponent } from './states/states.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {
    path: '', component: LocationComponent, children: [
      {path: '', redirectTo: 'states', pathMatch: 'full'},
      {
        path: 'states', component: StatesComponent,
        data: {breadcrumb: 'States', title: 'state'}
      },{
        path: 'cities', component: CitiesComponent,
        data: {breadcrumb: 'Cities', title: 'city'}
      }
    ]
  }
];

let entryComponents = [
  AddStateComponent,
  AddCityComponent
];

@NgModule({
  declarations: [
    LocationComponent,
    StatesComponent,
    CitiesComponent,
    ...entryComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: entryComponents
})
export class LocationModule {
}
