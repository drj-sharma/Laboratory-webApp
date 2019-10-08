import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  d = new Date();
  pName: string;
  spec: string;
  gen = '';
  srnum: number;
  drName: string;

  constructor() { }

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
}
