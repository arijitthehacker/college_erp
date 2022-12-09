import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLeadsComponent } from './customer-leads.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatusesComponent } from './statuses/statuses.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { PaidComponent } from './paid/paid.component';
import { AssignBookingComponent } from './assign-booking/assign-booking.component';
import { LogsComponent } from './logs/logs.component';
import { AddFinalPriceComponent } from './add-final-price/add-final-price.component';

const routes: Routes = [
  {
    path: '', component: CustomerLeadsComponent
  }
];

@NgModule({
  declarations: [
    CustomerLeadsComponent,
    StatusesComponent,
    MemberDetailsComponent,
    PaidComponent,
    AssignBookingComponent,
    LogsComponent,
    AddFinalPriceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    StatusesComponent,
    MemberDetailsComponent,
    PaidComponent,
    AssignBookingComponent,
    LogsComponent,
    AddFinalPriceComponent
  ]
})
export class CustomerLeadsModule {
}
