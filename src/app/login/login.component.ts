import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // email = new FormControl(''); 
  // password = new FormControl('');

  username: string = '';
  password: string = '';
  loader: boolean = false;

  // toasterConfig: any;
  // toasterconfig: ToasterConfig = new ToasterConfig({
  //     positionClass: 'toast-bottom-right',
  //     showCloseButton: true
  // });

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {

  }

  login = () => {

    this.loader = true;
    let params = { username: this.username, password: this.password }
    this.appService.userLogin(params).subscribe((res: any) => {

      this.loader = false;
      localStorage.setItem('userToken',res.token);
      this.toastr.success('Welcome', '');
      this.router.navigate(['dashboard/home']);

    }, (err) => {
      this.loader = false;
      console.log(err);
      this.toastr.error(err.error.message, 'Error Occured');
    });
   }

  navigateToPage = (path) => {

    this.router.navigate([path]);
  }

}
