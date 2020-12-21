import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';

import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [AppService],
})
export class AdminLoginModule { }
