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
        path: 'customer-leads',
        loadChildren: () => import('./customer-leads/customer-leads.module').then(m => m.CustomerLeadsModule),
        data: {breadcrumb: 'Customer leads', title: 'customer-leads'}
      }, {
        path: 'banners',
        loadChildren: () => import('./property-categories/banners.module').then(m => m.BannersModule),
        data: {breadcrumb: 'Banners', title: 'banners'}
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
