import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoPagesComponent } from './info-pages.component';

const routes: Routes = [
  {
    path: '', component: InfoPagesComponent
  }
];

@NgModule({
  declarations: [
    InfoPagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
  ]
})
export class InfoPagesModule {
}
