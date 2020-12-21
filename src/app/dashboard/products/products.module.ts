import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { AppService } from '../../app.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  providers: [AppService],
})
export class ProductsModule { }
