import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css']
})
export class SearchpatientComponent implements OnInit {

  searchedPatient: string[];
  msg: string;
  pname: string;
  visBool = false;
  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  searchPatient() {
    this.http.get('http://localhost:3000/api/fetchPatientbyname?querysearch='+ this.pname.toLowerCase(), {responseType: 'json'}).subscribe(
      (res: any[]) => {
        if (res.length > 0) {
          this.searchedPatient = res;
          this.visBool = true;
          console.log(this.searchedPatient);
        } else {
          this.msg = 'No result found';
        }
      },
      (err) => this.msg = err
    );
  }
  proceedIdtoprint(id) {
    this.router.navigate(['/printdata', id]);
  }
}
