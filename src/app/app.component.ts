import { Component } from '@angular/core';
import {AppService} from './app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resume: Object;

  constructor(appService: AppService, private translate: TranslateService) {
    appService.getResume().subscribe(x => this.resume = x);
    translate.setDefaultLang('en');


  }

  switchLanguage(language: string) {
    this.translate.use(language);
    location.reload(true);
  }

}
