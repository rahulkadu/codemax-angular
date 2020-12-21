import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

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
 

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  // upload(file: File): Observable<HttpEvent<any>> {

  fileName: any = '';
    myFiles:string [] = [];
    imageUrl: string = '';


  addImage(e) {
        this.fileName = e.target.files[0].name;
        console.log('fileName', this.fileName);
        for (var i = 0; i < e.target.files.length; i++) { 
            this.myFiles.push(e.target.files[i]);
        }
        // this.addPatientUploadImage();

      console.log('myFiles', this.myFiles);
    }

  // add = () => {
    addProduct() {
      const formData: FormData = new FormData();

      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('quantity', this.quantity);
      formData.append('amount', this.amount);
      formData.append('image', this.myFiles[0]);

      // console.log('file', file);
      console.log('formData', formData);
        // let params = { name: this.name, description: this.description, quantity: this.quantity, amount: this.amount, image: this.image }
        this.appService.addProduct(formData).subscribe((res: any) => {

          // localStorage.setItem('adminToken',res.token);

          this.toastr.success('Product Added Successfully', '');

           this.router.navigate(['admin-dashboard/products']);
        }, (err) => {
                console.log(err);
                this.toastr.error(err.error.message, 'Error Occured');
        });
    }

}
