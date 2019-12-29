import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allpatient',
  templateUrl: './allpatient.component.html',
  styleUrls: ['./allpatient.component.css']
})
export class AllpatientComponent implements OnInit {

  patients:[];
  msg: String;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPatientData();
  }

  fetchPatientData() {
    this.http.get('http://localhost:3000/api/fetchpatients', {responseType: 'json'}).subscribe(
      (res: [])=> {
        console.log(res);
        if(res.length > 0) this.patients = res;
      },
      (err) => this.msg = err
      );
  }


}
