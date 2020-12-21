import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: AdminDashboardComponent,
		children: [
			{ path: '', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule) },
			{ path: 'products', loadChildren: () => import('./products/products.module').then(module => module.ProductsModule) },
			{ path: 'add-product', loadChildren: () => import('./add-product/add-product.module').then(module => module.AddProductModule) },
		]

	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
