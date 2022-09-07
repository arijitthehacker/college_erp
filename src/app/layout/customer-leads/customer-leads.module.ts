import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLeadsComponent } from './customer-leads.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatusesComponent } from './statuses/statuses.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
  {
    path: '', component: CustomerLeadsComponent
  }
];

@NgModule({
  declarations: [
    CustomerLeadsComponent,
    StatusesComponent,
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    StatusesComponent,
    MemberDetailsComponent
  ]
})
export class CustomerLeadsModule {
}
