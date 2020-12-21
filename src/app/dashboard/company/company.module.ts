import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class CompanyModule { }
