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
import { HelpModalComponent } from './common/header/help-modal/help-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    HeaderComponent,
    HelpModalComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ModalModule.forRoot(),
    ChangePasswordModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    HelpModalComponent
  ]
})
export class LayoutModule {
}

