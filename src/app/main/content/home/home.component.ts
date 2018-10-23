import {AfterViewInit, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, AfterViewInit {

  constructor() { }

  ngOnDestroy() {
    $('html, body').animate({ scrollTop: 0 }, 800);
  }


  ngAfterViewInit() {
    $('footer').fadeIn();
  }

}
