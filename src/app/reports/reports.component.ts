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

  b1: string;
  b2: string;
  b3: string;

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

  sm1: string;
  sm2: string;
  sm3: string;
  sm4: string;
  sm5: string;
  sm6: string;
  sm7: string;
  sm8: string;
  sm9: string;
  sm10: string;
  sm11: string;
  sm12: string;

  u1: string;u2: string;u3: string;u4: string;u5: string;u6: string;u7: string;u8: string;u9: string;u10: string;u11: string;u12: string;u13: string;u14: string;u15: string;u16: string;u17: string;u18: string;

  sr1: string;sr2: string;sr3: string;sr4: string;sr5: string;sr6: string;sr7: string;sr8: string;sr9: string;sr10: string;sr11: string;

  st1: string;st2: string;st3: string;st4: string;st5: string;st6: string;st7: string;st8: string;st9: string;st10: string;st11: string;st12: string;st13: string;st14: string;st15: string;st16: string;st17: string;st18: string;st19: string;st20: string;st21: string;st22: string;st23: string;st24: string;st25: string;st26: string;st27: string;st28: string;

  id: string;
  sub: any;
  haemaRep: string[];
  bloodRep: string[];
  liquidRep: string[];
  liverRep: string[];
  renalRep: string[];
  serumRep: string[];
  semenRep: string[];
  urineRep: string[];
  serolRep: string[];
  serolWidalRep: string[];

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
    this.haemaRep = [this.h1,this.h2,this.h3,this.h4,this.h5,this.h6,this.h7,this.h8,this.h9,this.h10,this.h11,this.h12,this.h13,this.h14,this.h15,this.h16,this.h17];
    const heamo =  {
      id: this.id,
      hm: this.haemaRep
    };
    console.log(heamo);
    this.http.post('http://localhost:3000/api/report-haemo', heamo, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  }
  onSub2() {
    this.bloodRep = [this.b1, this.b2, this.b3];
    const blood =  {
      id: this.id,
      bl: this.bloodRep
    };
    console.log(blood);
    this.http.post('http://localhost:3000/api/report-blood', blood, {responseType: 'text'}).subscribe(
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
  onSub7() {
    this.serolRep = [this.sr1, this.sr2, this.sr3, this.sr4, this.sr5, this.sr6, this.sr7, this.sr8, this.sr9, this.sr10, this.sr11];
    this.serolWidalRep = [this.st1, this.st2, this.st3, this.st4, this.st5, this.st6, this.st7, this.st8, this.st9, this.st10, this.st11, this.st12, this.st13, this.st14, this.st15, this.st16, this.st17, this.st18, this.st19, this.st20, this.st21, this.st22, this.st23, this.st24, this.st25, this.st26, this.st27, this.st28 ]
    const serol =  {
      id: this.id,
      sl: this.serolRep,
      slwd: this.serolWidalRep
    };
    console.log(serol);
    this.http.post('http://localhost:3000/api/report-serol', serol, {responseType: 'text'}).subscribe(
      (res)=> console.log(res),
      (err) => console.log(err)
      );
  };
  onSub8() {
    this.urineRep = [this.u1, this.u2, this.u3, this.u4, this.u5, this.u6, this.u7, this.u8, this.u9, this.u10, this.u11, this.u12, this.u13, this.u14, this.u15, this.u16, this.u17, this.u18];
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
  onSub10() {
    this.semenRep = [this.sm1, this.sm2, this.sm3, this.sm4, this.sm5, this.sm6, this.sm7, this.sm8, this.sm9, this.sm10, this.sm11, this.sm12];
    const semen =  {
      id: this.id,
      sm: this.semenRep
    };
    console.log(semen);
    this.http.post('http://localhost:3000/api/report-semen', semen, {responseType: 'text'}).subscribe(
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
