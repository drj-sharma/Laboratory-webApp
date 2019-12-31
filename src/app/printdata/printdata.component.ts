import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { __awaiter } from 'tslib';
@Component({
  selector: 'app-printdata',
  templateUrl: './printdata.component.html',
  styleUrls: ['./printdata.component.css']
})
export class PrintdataComponent implements OnInit {

  id: String;
  patients: any[];
  msg: string;
  haemoArr: any[];
  urineArr: any[];
  liquidArr: any[];
  liverArr: any[];
  renalArr: any[];
  serumArr: any[];

  haemoBool = false;
  urineBool = false;
  liquidBool = false;
  liverBool = false;
  renalBool = false;
  serumBool = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.fetchPatientbyid();

  }

    fetchPatientbyid() {
    this.http.get('http://localhost:3000/api/fetchpatientbyid?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) this.patients = res;
        console.log(this.patients);
      },
      (err) => this.msg = err
    );
    this.http.get('http://localhost:3000/api/haemo-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
        this.haemoArr = res;
        this.haemoBool = true;
          //   this.haemo = this.toCheck(this.haemoArr[0].haemoarr);
          // console.log(this.toCheck(this.haemo['haemoarr']))
        } else {
          this.haemoBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.http.get('http://localhost:3000/api/urine-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.urineArr = res;
          this.urineBool = true;
        } else {
          this.urineBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.http.get('http://localhost:3000/api/liquid-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.liquidArr = res;
          this.liquidBool = true;
        } else {
          this.liquidBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.http.get('http://localhost:3000/api/liver-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.liverArr = res;
          this.liverBool = true;
        } else {
          this.liverBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.http.get('http://localhost:3000/api/renal-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.renalArr = res;
          this.renalBool = true;
        } else {
          this.renalBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.http.get('http://localhost:3000/api/serum-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.serumArr = res;
          this.serumBool = true;
        } else {
          this.serumBool = false;
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

