import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';
import { AgentsModule } from './agents/agents.module';
import { MembersModule } from './members/members.module';

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
