import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loader: boolean = false;

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  login = () => {
    let params = { username: this.username, password: this.password }
    this.loader = true;
    this.appService.adminLogin(params).subscribe((res: any) => {

      this.loader = false;
      localStorage.setItem('adminToken',res.token);
      this.toastr.success('Welcome', '');
      this.router.navigate(['admin-dashboard/products']);

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
