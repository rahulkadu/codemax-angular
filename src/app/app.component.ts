import { Component } from '@angular/core';

import { Router, Event, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'codemax-angular';
  selectedLang = 'en';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // var url = this.activatedRoute.snapshot.url;

    // var url = this.activatedRoute.url;
    // var url = this.router.UrlSegment;
    // console.log(url);

    var currentRoute = this.router.url; 
    console.log('currentRoute', currentRoute); 

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        var currentRoute2 = event.url;
        console.log('currentRoute2', currentRoute2);
      }

    })

  }

  

  languageList = [ // <--- add this
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' }
  ];

  langChange = (path) => {

    console.log('path',path);

    this.selectedLang = path;
    this.router.navigate(['/'+path+'/']);
  }
}

  
