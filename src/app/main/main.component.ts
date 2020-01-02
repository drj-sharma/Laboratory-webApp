import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  d = new Date();
  name: string;
  spec: string;
  age: number;
  gen = '';
  phNum: number;
  drName: string;
  msg: string;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const params = {
      nm: this.name,
      age: this.age,
      ph: this.phNum,
      gen: this.gen,
      speci: this.spec,
    };
    // console.log(params);
    this.http.post('http://localhost:3000/api/patientinfo', params, {responseType: 'text'}).subscribe(
      (res) => {
        this.msg = res;
        console.log(this.msg);
        this.router.navigate(['/reports', this.msg]);
      },
      (err) => {
        this.msg = err;
      }
    );
  }
}
