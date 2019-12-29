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
  gen = '';
  phNum: number;
  drName: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  h7: string;
  h8: string;
  h9: string;
  h10: string;
  h11: string;
  h12: string;
  h13: string;
  h14: string;
  h15: string;
  h16: string;
  h17: string;
  msg: string;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const params = {
      nm: this.name,
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
