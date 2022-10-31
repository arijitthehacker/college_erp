import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopersComponent } from './developers.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDeveloperComponent } from './add-developer/add-developer.component';

const routes: Routes = [
  {
    path: '', component: DevelopersComponent
  }
];

@NgModule({
  declarations: [
    DevelopersComponent,
    AddDeveloperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddDeveloperComponent
  ]
})
export class DevelopersModule {
}
