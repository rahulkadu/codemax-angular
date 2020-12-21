import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';
  password_confirm: string = '';
  loader: boolean = false;

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {

  }

  register = () => {

    this.loader = true;
    if (this.password_confirm != this.password) {
      this.toastr.error("Password doesn't match.", 'Error Occured');
      return;
    }

    let params = { username: this.username,email: this.email, password: this.password }
    this.appService.register(params).subscribe((res: any) => {

      this.loader = false;
      this.toastr.success('Registered Successfully', '');
      this.router.navigate(['login']);

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
