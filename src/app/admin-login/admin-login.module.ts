import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';

import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    FormsModule
  ],
  providers: [AppService],
})
export class AdminLoginModule { }
