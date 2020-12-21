import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModules } from './../material-module.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    MaterialModules,
    MatSidenavModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
