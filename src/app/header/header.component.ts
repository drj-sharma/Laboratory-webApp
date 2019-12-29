import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  vis = false;
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onAdmin();
        this.ngOnInit();
      }
    }); 
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }

  onAdmin() {
    if (sessionStorage.getItem('nm') === 'admin') {
      this.vis = true;
    } else {
    this.vis = false;
  }
}
}
