import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  d = new Date();
  name: string;
  spec: string;
  gen = ' ';
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
  haemaRep =  [this.h1, this.h2, this.h3, this.h4, this.h5, this.h6, this.h7, this.h8,
    this.h9, this.h10, this.h11, this.h12, this.h13, this.h14, this.h15, this.h16, this.h17];
  msg: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {       // JQuery
    const action = 'click';
    const speed = '500';

    // tslint:disable-next-line: deprecation
    $(document).ready(() =>  {
      $('li.q').on(action , function() {
        $(this).next()
          .slideToggle(speed)
            .siblings('.cont_a')
              .slideUp();
        const img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        img.toggleClass('rotate');
      });
    });
  }

  onSubmit() {
    const params = {
      name: this.name,
      ph: this.phNum,
      gen: this.gen,
      speci: this.spec,
      haemaR: this.haemaRep
    };
    this.http.post('http://localhost:3000/api/print', params, {responseType: 'text'}).subscribe(
      (res) => {
        this.msg = res;
      },
      (err) => {
        this.msg = err;
      }
    );
  }
}
