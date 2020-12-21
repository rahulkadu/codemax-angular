import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';
import { FormControl, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string = '';
  message: string = '';
 

  constructor(public appService: AppService, private toastr: ToastrService,private router: Router) { }

	ngOnInit() {
	}

	sumbitForm() {

        let params = { email: this.email, message: this.message }
        this.appService.submitContactUs(params).subscribe((res: any) => {

          	this.toastr.success('Submitted Successfully', '');

            this.router.navigate(['dashboard/home']);
        }, (err) => {
            console.log(err);
            this.toastr.error(err.error.message, 'Error Occured');
        });
    }
}
