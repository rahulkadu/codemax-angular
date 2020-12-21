import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminLoginComponent } from './admin-login.component';

const routes: Routes = [
	{
		path: '',
		component: AdminLoginComponent,
		// children: [
		// 	{ path: '', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
		// 	{ path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) },
		// 	{ path: 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule) },
		// 	{ path: 'company', loadChildren: () => import('./company/company.module').then(module => module.CompanyModule) },
		// 	{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule) },
		// ]

	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLoginRoutingModule { }
