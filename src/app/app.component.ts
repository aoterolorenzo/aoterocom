import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { TranslateService } from '@ngx-translate/core';
import {MDBSpinningPreloader} from '../../ng-uikit-pro-standard';
import {HttpClient} from '@angular/common/http';
declare const jarallax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  resume: Object;

  constructor(appService: AppService, private translate: TranslateService,
              public http: HttpClient) {
    appService.getResume().subscribe((x: Response) => this.resume = x);
    translate.setDefaultLang(localStorage.getItem('LANG') || 'en');
  }

  switchLanguage(language: string) {
      this.translate.use(language);
  }

  ngAfterViewInit() {
    const img = new Image();
    img.src = '/assets/img/60-lines.png';
    img.src = '/assets/img/alberto-otero2.logo.png';

  }

  ngOnInit() {

    jarallax(document.querySelectorAll('.jarallax'), {
      disableParallax: /iPad|iPhone|iPod|Android/,
      disableVideo: /iPad|iPhone|iPod|Android/
    });

    /** The OnInit function doesn't wait to background-image's from loading completely so
     *  we need to make a workaround to the MDBSpinningPreloader stops after that.
     *
     *  Thinking about explorer's cache, if we try to load again the image that triggers
     *  the wanted onload event, it will mean that every instance of the image all around the body is
     *  loaded. So we'll do that, load the background images and wait
     *  for his onload event, at least for the cover one.
     *
     * @type {HTMLImageElement}
     */

    const img = new Image();
    img.onload = function() {
       (new MDBSpinningPreloader(document)).stop();
    };
    img.src = 'https://i.imgur.com/XP10AR9.jpg';

  }


}
