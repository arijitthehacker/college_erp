// imports
import { LayoutRoutingModule } from './layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header.component';
// modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChangePasswordModule } from './common/change-password/change-password.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    HeaderComponent
  ],
   imports: [
      CommonModule,
      LayoutRoutingModule,
      ModalModule.forRoot(),
      ChangePasswordModule,
      ReactiveFormsModule,
      CollapseModule,
      SharedModule
   ],
  entryComponents: []
})
export class LayoutModule {
}

