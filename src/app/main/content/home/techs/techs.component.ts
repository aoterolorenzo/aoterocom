import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent implements OnInit {

  // Variables to fullfill with api request
  techs: Array<any>;

  constructor(appService: AppService) {
    appService.getResume().subscribe(x => {
      this.techs = x['techs'];
    });

  }

  ngOnInit() {
  }

}
