import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReasonsComponent } from './reasons.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddReasonComponent } from './add-reasons/add-reason.component';

const routes: Routes = [
  {
    path: '', component: ReasonsComponent
  }
];

@NgModule({
  declarations: [
    ReasonsComponent,
    AddReasonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddReasonComponent
  ]
})
export class ReasonsModule {
}
