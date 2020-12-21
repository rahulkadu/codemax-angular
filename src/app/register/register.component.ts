import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

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

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {

  }

  register = () => {

        if (this.password_confirm != this.password) {
          this.toastr.error("Password doesn't match.", 'Error Occured');
          return;
        }

        let params = { username: this.username,email: this.email, password: this.password }
        this.appService.register(params).subscribe((res: any) => {

          this.toastr.success('Registered Successfully', '');

            // this.appService.getUserDetails().subscribe((res: any) => {


            //   console.log(res);
            //   var user1 = res.response;
            //     localStorage.setItem('userDetails', JSON.stringify(user1));

            //     this.toastr.success('Welcome', '');
            
                // setTimeout((router: Router) => {
                    // this.router.navigateByUrl('/patients');

                    // var page_link = user1.pages[0].link;

                    // console.log('page_link', page_link);

                    this.router.navigate(['login']);
                // }, 200);

                // this.loader=false;


        }, (err) => {
                console.log(err);
                this.toastr.error(err.error.message, 'Error Occured');
        });
    }

  navigateToPage = (path) => {

    this.router.navigate([path]);
  }

}
