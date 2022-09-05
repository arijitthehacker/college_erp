import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCategoriesComponent } from './property-categories.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPropertyCategoryComponent } from './add-property-category/add-property-category.component';

const routes: Routes = [
  {
    path: '', component: PropertyCategoriesComponent
  }
];

@NgModule({
  declarations: [
    PropertyCategoriesComponent,
    AddPropertyCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddPropertyCategoryComponent
  ]
})
export class PropertyCategoriesModule {
}
