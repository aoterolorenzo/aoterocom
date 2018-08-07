import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../../app.service';

@Component({
  selector: 'app-home-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  // Variables to fullfill with api request
  education: Array<any>;
  skills: Array<any>;


  constructor(appService: AppService) {
    appService.getResume().subscribe((x: JSON) => {
      this.education = x['education'];
      this.skills = x['skills'];


    });

  }

  ngOnInit() {
  }

}
