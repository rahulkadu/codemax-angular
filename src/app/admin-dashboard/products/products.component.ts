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

  	// console.log('get');

  	this.appService.getProductsAdmin().subscribe((res: any) => {

  	console.log('res', res);
  		this.productsList = res.products;
  		console.log('get2', this.productsList);
          
    }, (err) => {
            console.log(err);
            this.toastr.error(err.error.message, 'Error Occured');
    });
  }

  // cardNumber: number = 0;  
  // cardAmount: number = 0; 

  // addToCart(product) {

  // 	console.log(product, 'addToCart');
  // }

}
