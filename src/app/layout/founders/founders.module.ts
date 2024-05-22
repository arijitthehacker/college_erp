import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundersComponent } from './founders.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddFounderComponent } from './add-founder/add-founder.component';

const routes: Routes = [
  {
    path: '', component: FoundersComponent
  }
];

@NgModule({
  declarations: [
    FoundersComponent,
    AddFounderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddFounderComponent,
  ]
})
export class FoundersModule {
}
