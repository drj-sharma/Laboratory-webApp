import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
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

  u1: string;
  u2: string;
  u3: string;

  l1: string;
  l2: string;
  l3: string;
  l4: string;
  l5: string;
  l6: string;
  l7: string;

  lv1: string;
  lv2: string;
  lv3: string;
  lv4: string;
  lv5: string;
  lv6: string;
  lv7: string;
  lv8: string;
  lv9: string;
  lv10: string;

  r1: string;
  r2: string;
  r3: string;
  r4: string;
  r5: string;
  r6: string;

  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;

  id: string;
  sub: any;
  heamaRep: any;
  urineRep: any;
  liquidRep: any;
  liquidPro: any;
  liverRep: string[];
  renalRep: string[];
  serumRep: any[];
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params:any) => {
      this.id = params['id'].substring(1, 25);
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
      id: this.id,
      hm: this.heamaRep
    };
    console.log(heamo);
    this.http.post('http://localhost:3000/api/report-heamo', heamo, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }
  onSub2() {
    this.urineRep = [this.u1, this.u2, this.u3];
    const urine =  {
      id: this.id,
      ur: this.urineRep
    };
    console.log(urine);
    this.http.post('http://localhost:3000/api/report-urine', urine, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }
  onSub3() {
    this.liquidRep = [this.l1, this.l2, this.l3, this.l4, this.l5, this.l6, this.l7];
    const liquid =  {
      id: this.id,
      lq: this.liquidRep
    };
    console.log(liquid);
    this.http.post('http://localhost:3000/api/report-liquid', liquid, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }
  onSub4() {
    this.liverRep = [this.lv1, this.lv2, this.lv3, this.lv4, this.lv5, this.lv6, this.lv7, this.lv8, this.lv9, this.lv10];
    const liver =  {
      id: this.id,
      lv: this.liverRep
    };
    console.log(liver);
    this.http.post('http://localhost:3000/api/report-liver', liver, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }
  onSub5() {
    this.renalRep = [this.r1, this.r2, this.r3, this.r4, this.r5, this.r6];
    const renal =  {
      id: this.id,
      rn: this.renalRep
    };
    console.log(renal);
    this.http.post('http://localhost:3000/api/report-renal', renal, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }
  onSub6() {
    this.serumRep = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6];
    const serum =  {
      id: this.id,
      sr: this.serumRep
    };
    console.log(serum);
    this.http.post('http://localhost:3000/api/report-serum', serum, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }


  proceedId() {
      this.router.navigate(['/printdata', this.id]);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
