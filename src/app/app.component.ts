import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(private router: Router) {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      if (event.url.search('/printdata/') ) {
        this.hideElement = false;
      }  else {
        this.hideElement = true;
      }
    }
  });
}


  title = 'lab-app';
  hideElement = true;
}
