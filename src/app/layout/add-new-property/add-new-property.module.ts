import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewPropertyComponent } from './add-new-property.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: AddNewPropertyComponent
  }
];

@NgModule({
  declarations: [
    AddNewPropertyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
  ]
})
export class AddNewPropertyModule {
}
