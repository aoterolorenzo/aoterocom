import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-middle-parallax',
  templateUrl: './middle-parallax.component.html',
  styleUrls: ['./middle-parallax.component.scss']
})
export class MiddleParallaxComponent implements OnInit {

  @Input() speed: number;
  @Input() imgURL: string; // time to wait after finish typing to start deleting the current string
  @Input() height: string;
  style: object;

  constructor() { }

  ngOnInit() {

    this.style = {'background-image': 'url(\'' + this.imgURL + '\')' ,
      'height': this.height,
      'background-repeat': 'no-repeat',
       'background-size': 'cover',
      'background-position': 'center center'};
  }

}
