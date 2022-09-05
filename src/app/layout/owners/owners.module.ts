import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { InviteCodesComponent } from './invite-codes/invite-codes.component';

const routes: Routes = [
  {
    path: '', component: OwnersComponent
  }
];

@NgModule({
  declarations: [
    OwnersComponent,
    InviteCodesComponent,
    AddOwnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddOwnerComponent,
    InviteCodesComponent
  ]
})
export class OwnersModule {
}
