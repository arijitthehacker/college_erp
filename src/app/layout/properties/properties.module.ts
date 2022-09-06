import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPropertyComponent } from './add-property/add-property.component';

const routes: Routes = [
  {
    path: '', component: PropertiesComponent
  }
];

@NgModule({
  declarations: [
    PropertiesComponent,
    AddPropertyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddPropertyComponent
  ]
})
export class PropertiesModule {
}
