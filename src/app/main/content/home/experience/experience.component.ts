import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  // Variables to fullfill with api request
  services_and_protocols: Array<any>;
  telecommunications: Array<any>;
  others: Array<any>;

  constructor(appService: AppService) {
    appService.getResume().subscribe((x: JSON) => {
      this.services_and_protocols = x['other_skills'][0]['Services and protocols'];
      this.telecommunications = x['other_skills'][0]['Telecommunications'];
      this.others = x['other_skills'][0]['Others'];

    });

  }

  ngOnInit() {
  }

}
