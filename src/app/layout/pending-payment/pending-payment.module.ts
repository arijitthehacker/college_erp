import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingPaymentComponent } from './pending-payment.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: PendingPaymentComponent
  }
];

@NgModule({
  declarations: [
    PendingPaymentComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [

  ]
})
export class PendingPaymentModule {
}
