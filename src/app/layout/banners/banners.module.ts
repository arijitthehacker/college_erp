import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './banners.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddBannerComponent } from './add-banner/add-banner.component';

const routes: Routes = [
  {
    path: '', component: BannersComponent
  }
];

@NgModule({
  declarations: [
    BannersComponent,
    AddBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddBannerComponent
  ]
})
export class BannersModule {
}
