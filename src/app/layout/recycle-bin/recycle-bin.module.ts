import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecycleBinComponent } from './recycle-bin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: RecycleBinComponent
  }
];

@NgModule({
  declarations: [
    RecycleBinComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
  ]
})
export class RecycleBinModule {
}
