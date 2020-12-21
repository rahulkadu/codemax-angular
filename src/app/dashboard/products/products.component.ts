import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList:any = [];
  loader: boolean = false;
  
  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {

    this.loader = true;
  	this.appService.getProductsUser().subscribe((res: any) => {
      
      this.loader = false;
  		this.productsList = res.products;
          
    }, (err) => {

      this.loader = false;
      console.log(err);
      this.toastr.error(err.error.message, 'Error Occured');
    });
  }

  cardNumber: number = 0;  
  cardAmount: number = 0; 

  addToCart(product) {

    console.log(product, 'addToCart');
    this.cardNumber = this.cardNumber + 1;
    this.cardAmount = this.cardAmount + product.amount;

  }

  clearCart() {
    this.cardNumber = 0;  
    this.cardAmount = 0; 
  }
}
