import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';
import { AgentsModule } from './agents/agents.module';
import { MembersModule } from './members/members.module';
import { ReasonsModule } from './reasons/reasons.module';
import { InfoPagesModule } from './info-pages/info-pages.module';
import { ProfileModule } from './profile/profile.module';

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
      },{
        path: 'recycle-bin',
        loadChildren: () => import('./recycle-bin/recycle-bin.module').then(m => m.RecycleBinModule),
        data: {breadcrumb: 'Recycle Bin', title: 'Recycle Bin'}
      }, {
        path: 'reasons',
        loadChildren: () => import('./reasons/reasons.module').then(m => m.ReasonsModule),
        data: {breadcrumb: 'Reject Reasons', title: 'reason'}
      }, {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        data: {breadcrumb: 'Admin profile', title: 'profile'}
      }, {
        path: 'pending-payment',
        loadChildren: () => import('./pending-payment/pending-payment.module').then(m => m.PendingPaymentModule),
        data: {breadcrumb: 'Pending Payments', title: 'Pending Payments'}
      }, {
        path: 'transaction-history',
        loadChildren: () => import('./transaction-history/transaction-history.module').then(m => m.TransactionHistoryModule),
        data: {breadcrumb: 'Transaction History', title: 'Transaction History'}
      }, {
        path: 'advance-request',
        loadChildren: () => import('./advance-request/advance-request.module').then(m => m.AdvanceRequestModule),
        data: {breadcrumb: 'Advance Request', title: 'Advance Request'}
      }, {
        path: 'developers',
        loadChildren: () => import('./developers/developers.module').then(m => m.DevelopersModule),
        data: {breadcrumb: 'Developers', title: 'developer'}
      }, {
        path: 'commissions',
        loadChildren: () => import('./commissions/commissions.module').then(m => m.CommissionsModule),
        data: {breadcrumb: 'Commissions', title: 'commission'}
      }, {
        path: 'change-password',
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule),
        data: {breadcrumb: 'Change Password', title: 'Change Password'}
      }, {
        path: 'add-new-property',
        loadChildren: () => import('./add-new-property/add-new-property.module').then(m => m.AddNewPropertyModule),
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
