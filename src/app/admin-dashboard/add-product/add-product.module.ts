import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';

import { AppService } from '../../app.service';
import { FormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [AppService],
})
export class AddProductModule { }
