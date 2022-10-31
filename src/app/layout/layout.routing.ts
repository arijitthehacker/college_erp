import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';
import { AgentsModule } from './agents/agents.module';
import { MembersModule } from './members/members.module';
import { ReasonsModule } from './reasons/reasons.module';
import { InfoPagesModule } from './info-pages/info-pages.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', redirectTo: '/owners', pathMatch: 'full'
      },
      {
        path: 'owners',
        loadChildren: () => import('./owners/owners.module').then(m => m.OwnersModule),
        data: {breadcrumb: 'Owners', title: 'owner'}
      }, {
        path: 'agents',
        loadChildren: () => import('./agents/agents.module').then(m => m.AgentsModule),
        data: {breadcrumb: 'Agents', title: 'agent'}
      }, {
        path: 'members',
        loadChildren: () => import('./members/members.module').then(m => m.MembersModule),
        data: {breadcrumb: 'Members', title: 'member'}
      }, {
        path: 'properties',
        loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule),
        data: {breadcrumb: 'Properties', title: 'property'}
      }, {
        path: 'budgets',
        loadChildren: () => import('./budgets/budgets.module').then(m => m.BudgetsModule),
        data: {breadcrumb: 'Property Budgets', title: 'budget'}
      }, {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
        data: {breadcrumb: 'Settings', title: 'setting'}
      }, {
        path: 'purposes',
        loadChildren: () => import('./purposes/purposes.module').then(m => m.PurposesModule),
        data: {breadcrumb: 'Property Purposes', title: 'purpose'}
      }, {
        path: 'reasons',
        loadChildren: () => import('./reasons/reasons.module').then(m => m.ReasonsModule),
        data: {breadcrumb: 'Reject Reasons', title: 'reason'}
      }, {
        path: 'developers',
        loadChildren: () => import('./developers/developers.module').then(m => m.DevelopersModule),
        data: {breadcrumb: 'Developers', title: 'developer'}
      }, {
        path: 'info-pages/:type',
        loadChildren: () => import('./info-pages/info-pages.module').then(m => m.InfoPagesModule),
        data: {breadcrumb: 'Info pages', title: 'info pages'}
      }, {
        path: 'customer-leads',
        loadChildren: () => import('./customer-leads/customer-leads.module').then(m => m.CustomerLeadsModule),
        data: {breadcrumb: 'Customer leads', title: 'customer-leads'}
      }, {
        path: 'property-categories',
        loadChildren: () => import('./property-categories/property-categories.module').then(m => m.PropertyCategoriesModule),
        data: {breadcrumb: 'Property Categories', title: 'property category'}
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
