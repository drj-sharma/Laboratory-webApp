import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
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
  bloodArr: any[];
  semenArr: any[];
  serolArr: any[];

  haemoBool = false;
  urineBool = false;
  liquidBool = false;
  liverBool = false;
  renalBool = false;
  serumBool = false;
  bloodBool = false;
  semenBool = false;
  serolBool = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private _router: Router) { 
    if (sessionStorage.length === 0) {
      this._router.navigateByUrl('');
    }
  }

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
    this.fetchHaemo();
  }

  printPage() {
    window.print();
  }
  backToMain() {
    this._router.navigate(['/main']);
  }

  fetchHaemo() {
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
    this.fetchBlood();
  }
  fetchBlood() {
    this.http.get('http://localhost:3000/api/blood-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.bloodArr = res;
          this.bloodBool = true;
        } else {
          this.bloodBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.fetchLiquid();
  }
  fetchLiquid() {
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
    this.fetchLiver();
  }
  fetchLiver() {
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
    this.fetchRenal();
  }
  fetchRenal() {
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
    this.fetchSerum();
  }
  fetchSerum() {
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
    this.fetchSerol();
  }
  fetchSerol() {
    this.http.get('http://localhost:3000/api/serol-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.serolArr = res;
          this.serolBool = true;
        } else {
          this.serolBool = false;
        };
      },
      (err) => this.msg = err
    );
    this.fetchUrine()
  }
  fetchUrine() {
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
    this.fetchSemen();
  }
  fetchSemen() {
    this.http.get('http://localhost:3000/api/semen-rep?id=' + this.id, { responseType: 'json' }).subscribe(
      (res: []) => {
        console.log(res);
        if (res.length > 0) {
          this.semenArr = res;
          this.semenBool = true;
        } else {
          this.semenBool = false;
        };
      },
      (err) => this.msg = err
    );
  }
  // toCheck(arr) {
  //   let checker = arr.every(v => v === null);
  //   return checker;
  // }
}

