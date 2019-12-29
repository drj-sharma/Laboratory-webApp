import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

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
  id: string;
  sub: any;
  heamaRep: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params:any) => {
      this.id = params['id'];
    });
        // JQuery
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

  onSub1() {
    this.heamaRep = [this.h1,this.h2,this.h3,this.h4,this.h5,this.h6,this.h7,this.h8,this.h9,this.h10,this.h11,this.h12,this.h13,this.h14,this.h15,this.h16,this.h17];
    const heamo =  {
      id: this.id.substring(1, 25),
      hm: this.heamaRep
    };
    console.log(heamo);
    this.http.post('http://localhost:3000/api/report-heamo', heamo, {responseType: 'text'}).subscribe()
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
