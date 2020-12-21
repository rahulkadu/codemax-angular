import { Component, OnInit } from '@angular/core';

import { Router, Event, NavigationStart } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

	currentRoute = "";
  drawerMode = "side";

  constructor(private router: Router) { }

  ngOnInit() {

    this.currentRoute = this.router.url;  

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;
        console.log(this.currentRoute, 'ccroutes');
      }

    })
  }

  navigateToPage = (path) => {

    this.router.navigate([path]);
  }

  logout() {

    localStorage.clear();
    this.router.navigate(['admin-login']);
  }
}
