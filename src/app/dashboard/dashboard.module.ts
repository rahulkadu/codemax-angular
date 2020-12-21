import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModules } from './../material-module.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModules,
    MatSidenavModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
