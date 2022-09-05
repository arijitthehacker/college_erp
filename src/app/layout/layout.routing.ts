import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';
import { AgentsModule } from './agents/agents.module';

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
        path: 'banners',
        loadChildren: () => import('./banners/banners.module').then(m => m.BannersModule),
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
