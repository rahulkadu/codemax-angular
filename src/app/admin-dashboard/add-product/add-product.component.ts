import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: string = '';
  description: string = '';
  quantity: string = '';
  amount: string = '';
  image: string = '';

  loader: boolean = false;

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  fileName: any = '';
  myFiles:string [] = [];
  imageUrl: string = '';

  addImage(e) {
    this.fileName = e.target.files[0].name;
    console.log('fileName', this.fileName);
    for (var i = 0; i < e.target.files.length; i++) { 
        this.myFiles.push(e.target.files[i]);
    }
    console.log('myFiles', this.myFiles);
  }

  addProduct() {

    this.loader = true;

    const formData: FormData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('quantity', this.quantity);
    formData.append('amount', this.amount);
    formData.append('image', this.myFiles[0]);

    console.log('formData', formData);

    this.appService.addProduct(formData).subscribe((res: any) => {

      this.loader = false;
      this.toastr.success('Product Added Successfully', '');
      this.router.navigate(['admin-dashboard/products']);

    }, (err) => {

      console.log(err);
      this.loader = false;
      this.toastr.error(err.error.message, 'Error Occured');
    });
  }
}
