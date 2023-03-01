import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordComponent } from './update-password.component';

// modules
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: UpdatePasswordComponent
  }
];

@NgModule({
  declarations: [
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UpdatePasswordModule { }
