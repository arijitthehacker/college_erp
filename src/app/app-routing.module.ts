import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { AuthGuard } from './services/guards/auth.guard';
import { LayoutGuard } from './services/guards/layout.guard';
import { ResetPasswordModule } from './public/reset-password/reset-password.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then((m) => m.LoginModule),
    data: {title: 'Login', breadcrumb: 'Login'},
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [LayoutGuard]
  },

  {
    path: 'reset-password',
    loadChildren: () =>
      import('./public/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordModule
      ),
    data: {
      title: 'Reset Password',
      breadcrumb: 'Reset Password '
    }
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
