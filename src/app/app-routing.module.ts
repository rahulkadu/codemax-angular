import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalGuard } from './_guards/internal.guard';
import { LoginGuard } from './_guards/login.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full'},
	{ path: 'login', loadChildren: () => import('./login/login.module').then(module => module.LoginModule), canActivate: [LoginGuard] },
	{ path: 'register', loadChildren: () => import('./register/register.module').then(module => module.RegisterModule), canActivate: [LoginGuard]},
	{ path: 'admin-login', loadChildren: () => import('./admin-login/admin-login.module').then(module => module.AdminLoginModule), canActivate: [LoginGuard]},

	{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule), canActivate: [InternalGuard]},
	{ path: 'admin-dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(module => module.AdminDashboardModule), canActivate: [InternalGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
