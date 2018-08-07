import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public map: any = {
    lat: 43.367139, // 43.367139, -8.408852
    lng: -8.408852,
    zoom: 14,
    styles:
      [
        {
          'featureType': 'all',
          'elementType': 'geometry',
          'stylers': [
            {
              'hue': '#ff4400'
            },
            {
              'saturation': -68
            },
            {
              'lightness': -4
            },
            {
              'gamma': 0.72
            }
          ]
        },
        {
          'featureType': 'administrative.locality',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#111b2a'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry',
          'stylers': [
            {
              'hue': '#0077ff'
            },
            {
              'gamma': 3.1
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#a16942'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'lightness': '-27'
            },
            {
              'weight': '0.01'
            },
            {
              'color': '#ffffff'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'simplified'
            },
            {
              'hue': '#ff9200'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'all',
          'stylers': [
            {
              'hue': '#44ff00'
            },
            {
              'saturation': -23
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'saturation': -64
            },
            {
              'hue': '#ff9100'
            },
            {
              'lightness': 16
            },
            {
              'gamma': 0.47
            },
            {
              'weight': 2.7
            }
          ]
        },
        {
          'featureType': 'transit.line',
          'elementType': 'geometry',
          'stylers': [
            {
              'lightness': -48
            },
            {
              'hue': '#ff5e00'
            },
            {
              'gamma': 1.2
            },
            {
              'saturation': -23
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'gamma': 0.44
            },
            {
              'saturation': -33
            },
            {
              'color': '#2a4369'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'hue': '#007fff'
            },
            {
              'gamma': 0.77
            },
            {
              'saturation': 65
            },
            {
              'lightness': 99
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'gamma': 0.11
            },
            {
              'weight': 5.6
            },
            {
              'saturation': 99
            },
            {
              'hue': '#0091ff'
            },
            {
              'lightness': -86
            }
          ]
        }
      ]
  };

  contact_icons = [
    {
      'icon-class': 'fas fa-map-marker fa-2x',
      'text': ''
    },
    {
      'icon-class': 'fab fa-telegram-plane fa-2x mt-4',
      'text': ''
    },
    {
      'icon-class': 'far fa-envelope fa-2x mt-4',
      'text': ''
    }
  ];

  constructor(appService: AppService) {
    appService.getResume().subscribe((x: JSON) => {
      this.map.lat = x['contact_lat'];
      this.map.lng = x['contact_long'];
      this.contact_icons[0].text = x['contact_place'];
      this.contact_icons[1].text = x['contact_line'];
      this.contact_icons[2].text = x['email'];


    });

  }

  ngOnInit(): void {
  }

}

