import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../../app.service';
declare const particlesJS: any;

@Component({
  selector: 'app-home-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  // Variables to fullfill with api request
  typewritterArray: Array<string>; // typewriter params
  sociallinks: any;

  constructor(appService: AppService) {
    appService.getResume().subscribe((x: JSON) => {
      this.typewritterArray = x['words'];
      this.sociallinks = x['social_links'];
    });

  }

  public ngOnInit() {
    /* particles.js config on div with id 'particles-js'*/
    particlesJS('particles-js', {
      'particles': {
        'number': {
          'value': 150,
          'density': {
            'enable': true,
            'value_area': 2500

          }


        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 2,
            'color': '#aaa'
          },
          'polygon': {
            'nb_sides': 7
          },
        },
        'opacity': {
          'value': 0.3,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 3,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 1.4,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 20,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 250,
          'color': 'aaa',
          'opacity': 0.3,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 1,
          'direction': 'none',
          'random': true,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }

        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'repulse'

          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 250,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 300,
            'size': 70,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 100,
            'duration': 0.8
          },
          'push': {
            'particles_nb': 1
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true

    });

  }

}
