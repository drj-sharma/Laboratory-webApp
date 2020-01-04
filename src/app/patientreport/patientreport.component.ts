import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientreport',
  templateUrl: './patientreport.component.html',
  styleUrls: ['./patientreport.component.css']
})
export class PatientreportComponent implements OnInit {

  constructor(private router: Router) { 
    if (sessionStorage.length === 0) {
      this.router.navigateByUrl('');
    }
  }

  ngOnInit() {
  }

}
