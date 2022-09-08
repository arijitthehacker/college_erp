import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ProAddressesComponent } from './pro-addresses/pro-addresses.component';
import { AddProAddressComponent } from './add-pro-address/add-pro-address.component';

const routes: Routes = [
  {
    path: '', component: PropertiesComponent
  }
];

@NgModule({
  declarations: [
    PropertiesComponent,
    AddPropertyComponent,
    ProAddressesComponent,
    AddProAddressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddPropertyComponent,
    ProAddressesComponent,
    AddProAddressComponent

  ]
})
export class PropertiesModule {
}
