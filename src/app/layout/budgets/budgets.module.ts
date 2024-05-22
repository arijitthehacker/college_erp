import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsComponent } from './budgets.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddBudgetComponent } from './add-budget/add-budget.component';

const routes: Routes = [
  {
    path: '', component: BudgetsComponent
  }
];

@NgModule({
  declarations: [
    BudgetsComponent,
    AddBudgetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddBudgetComponent
  ]
})
export class BudgetsModule {
}
