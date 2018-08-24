// Class to make the navbar fixed during the life of a component who extends it.
// Also provides a scroll when next routerlink is called
import {AfterViewInit, OnDestroy} from '@angular/core';

export class RoutingAnimationHelper implements AfterViewInit, OnDestroy {

  ngAfterViewInit() {
    $('.navbar')
      .removeClass('scrolling-navbar')
      .addClass('top-nav-collapse');
    $('main').hide().fadeIn();

  }

  ngOnDestroy() {
    $('.navbar')
      .addClass('scrolling-navbar')
      .removeClass('top-nav-collapse');
    $('main').hide().fadeIn();

  }

}
