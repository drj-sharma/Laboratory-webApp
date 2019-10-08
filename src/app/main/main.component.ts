import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  d = new Date();

  constructor() { }

  public ngOnInit() {       // JQuery
    const action = 'click';
    const speed = '500';

    $(document).ready(() =>  {
      $('li.q').on(action , function() {
        $(this).next()
          .slideToggle(speed)
            .siblings('li.a')
              .slideUp();
        const img = $(this).children('img');
        $('img').not(img).removeClass('rotate');
        img.toggleClass('rotate');
      });
    });
  }
}
