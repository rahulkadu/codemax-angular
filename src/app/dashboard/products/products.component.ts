import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList:any = [];
  
  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {

  	this.appService.getProductsUser().subscribe((res: any) => {

  		this.productsList = res.products;
          
    }, (err) => {
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
