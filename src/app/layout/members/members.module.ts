import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditMemberComponent } from './edit-member/edit-member.component';

const routes: Routes = [
  {
    path: '', component: MembersComponent
  }
];

@NgModule({
  declarations: [
    MembersComponent,
    EditMemberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    EditMemberComponent
  ]
})
export class MembersModule {
}
