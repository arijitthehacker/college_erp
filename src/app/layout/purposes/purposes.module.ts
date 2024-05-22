import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurposesComponent } from './purposes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPurposeComponent } from './add-purpose/add-purpose.component';

const routes: Routes = [
  {
    path: '', component: PurposesComponent
  }
];

@NgModule({
  declarations: [
    PurposesComponent,
    AddPurposeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddPurposeComponent
  ]
})
export class PurposesModule {
}
