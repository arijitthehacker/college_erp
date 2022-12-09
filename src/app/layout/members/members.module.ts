import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangeMemberPasswordComponent } from './change-member-password/change-member-password.component';

const routes: Routes = [
  {
    path: '', component: MembersComponent
  }
];

@NgModule({
  declarations: [
    MembersComponent,
    ChangeMemberPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ChangeMemberPasswordComponent
  ]
})
export class MembersModule {
}
