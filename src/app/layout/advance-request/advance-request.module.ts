import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceRequestComponent } from './advance-request.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RejectReasonComponent } from './reject-reason/reject-reason.component';

const routes: Routes = [
  {
    path: '', component: AdvanceRequestComponent
  }
];

@NgModule({
  declarations: [
    AdvanceRequestComponent,
    RejectReasonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    RejectReasonComponent
  ]
})
export class AdvanceRequestModule {
}
