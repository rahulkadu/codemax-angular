import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  login = () => {
        let params = { username: this.username, password: this.password }
        this.appService.adminLogin(params).subscribe((res: any) => {

          localStorage.setItem('adminToken',res.token);

          this.toastr.success('Welcome', '');

            // this.appService.getUserDetails().subscribe((res: any) => {


            //   console.log(res);
            //   var user1 = res.response;
            //     localStorage.setItem('userDetails', JSON.stringify(user1));

            //     this.toastr.success('Welcome', '');
            
                // setTimeout((router: Router) => {
                    // this.router.navigateByUrl('/patients');

                    // var page_link = user1.pages[0].link;

                    // console.log('page_link', page_link);

                    this.router.navigate(['admin-dashboard/products']);
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
