import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminListComponent } from './admin-list.component';
import { AdminsComponent } from './admins.component';

const routes: Routes = [
  {
    path: '', component: AdminsComponent, children: [
      {path: '', component: AdminListComponent},
      {path: 'add-admin', component: AddAdminComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AddAdminComponent,
    AdminListComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: []
})
export class AdminsModule {
}
