import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecycleBinComponent } from './recycle-bin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsDataComponent } from './details-data/details-data.component';

const routes: Routes = [
  {
    path: '', component: RecycleBinComponent
  }
];

@NgModule({
  declarations: [
    RecycleBinComponent,
    DetailsDataComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    DetailsDataComponent
  ]
})
export class RecycleBinModule {
}
