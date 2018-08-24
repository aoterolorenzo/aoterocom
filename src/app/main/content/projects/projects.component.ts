import { Component, OnInit } from '@angular/core';
import {RoutingAnimationHelper} from '../../../core/helpers/routing-animation.helper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends RoutingAnimationHelper implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
