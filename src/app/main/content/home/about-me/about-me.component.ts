import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-home-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  // Variables to fullfill with api request
  img: String;
  name: String;
  birth_date: Date;
  birth_place: String;
  nacionality: String;
  driving_license: String;
  langs: Array<any>;
  description: String;


  constructor(appService: AppService) {
    appService.getResume().subscribe((x: JSON) => {
      this.img = x['img'];
      this.name = x['name'];
      this.birth_date = x['birth_date'];
      this.birth_place = x['birth_place'];
      this.nacionality = x['nacionality'];
      this.driving_license = x['driving_license'];
      this.langs = x['langs'];
      this.description = x['description'];
    });

  }

  ngOnInit() {
  }


  splitbynewline(string: String) {

    return string != null ? string.split('\n\n') : '';

  }

}
