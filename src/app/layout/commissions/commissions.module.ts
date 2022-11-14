import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionsComponent } from './commissions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCommissionComponent } from './add-commission/add-commission.component';

const routes: Routes = [
  {
    path: '', component: CommissionsComponent
  }
];

@NgModule({
  declarations: [
    CommissionsComponent,
    AddCommissionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddCommissionComponent
  ]
})
export class CommissionsModule {
}
