import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) {
    if (sessionStorage.length === 0) {
      this.router.navigateByUrl('');
    }
   }

  ngOnInit() {
  }

}
