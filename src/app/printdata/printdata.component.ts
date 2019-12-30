import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-printdata',
  templateUrl: './printdata.component.html',
  styleUrls: ['./printdata.component.css']
})
export class PrintdataComponent implements OnInit {

  id: String;
  haemo = false;
  patients: any[];
  msg: string;
  haemoArr: any[];
  constructor( private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {

    this.route.params.subscribe((params:any) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.fetchPatientbyid();

  }

  fetchPatientbyid() {
    this.http.get('http://localhost:3000/api/fetchpatientbyid?id=' + this.id,  {responseType: 'json'}).subscribe(
      (res: []) => {
        console.log(res);
        if(res.length > 0) this.patients = res;
        console.log(this.patients);
      },
      (err) => this.msg = err
      );
      this.http.get('http://localhost:3000/api/haemo-rep?id=' + this.id, {responseType: 'json'}).subscribe(
        (res: []) => {
          console.log(res);
          if(res.length > 0) {this.haemoArr = res;
          //   this.haemo = this.toCheck(this.haemoArr[0].haemoarr);
          // console.log(this.toCheck(this.haemo['haemoarr']))
        };
        },
        (err) => this.msg = err
        );

  }

  printPage() {
    window.print();
  }
  // toCheck(arr) {
  //   let checker = arr.every(v => v === null);
  //   return checker;
  // }
}

