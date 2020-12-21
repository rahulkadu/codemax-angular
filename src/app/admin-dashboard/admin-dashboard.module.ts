import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModules } from './../material-module.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    MaterialModules,
    MatSidenavModule,
    AdminDashboardRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class AdminDashboardModule { }
