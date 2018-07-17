import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent implements OnInit {


  section = {
    'icon': 'fas fa-book',
    'title': 'Technologies'
  };


  techs = {
      'row1': [
        {
          'icon-class': 'fas fa-language',
          'title': 'Languages and stuff',
          'items': [
            {
              'tech-tittle': 'Java',
              'tech-icon-class': 'fab fa-java'
            },
            {
              'tech-tittle': 'Python',
              'tech-icon-class': 'fab fa-python'
            },
            {
              'tech-tittle': 'C',
              'tech-icon-class': 'fab fa-cuttlefish'
            },
            {
              'tech-tittle': 'NodeJS',
              'tech-icon-class': 'fab fa-node-js'
            },
            {
              'tech-tittle': 'HTML5',
              'tech-icon-class': 'fab fa-html5'
            },
            {
              'tech-tittle': 'CSS3',
              'tech-icon-class': 'fab fa-css3'
            },
            {
              'tech-tittle': 'JS',
              'tech-icon-class': 'fab fa-js'
            },
            {
              'tech-tittle': 'SQL',
              'tech-icon-class': 'fas fa-database'
            },
            {
              'tech-tittle': 'Github',
              'tech-icon-class': 'fab fa-github'
            },
            {
              'tech-tittle': 'R',
              'tech-icon-class': 'fas fa-registered'
            }

          ]
        },
        {
          'icon-class': 'fas fa-database',
          'title': 'DB management systems',
          'items': [
            {
              'tech-tittle': 'MySQL',
              'tech-icon-class': 'icon-mysql'
            },
            {
              'tech-tittle': 'Postgre',
              'tech-icon-class': 'icon-postgresql2'
            },
            {
              'tech-tittle': 'SQLite',
              'tech-icon-class': 'icon-sqlite'
            }
          ]
        }
      ],
      'row2': [
        {
          'icon-class': 'fas fa-puzzle-piece',
          'title': 'Frameworks',
          'items': [
            {
              'tech-tittle': 'Django',
              'tech-icon-class': 'icon-django'
            },
            {
              'tech-tittle': 'Android',
              'tech-icon-class': 'fab fa-android'
            },
            {
              'tech-tittle': 'Spring',
              'tech-icon-class': 'icon-spring'
            },
            {
              'tech-tittle': 'Hibernate',
              'tech-icon-class': 'icon-hibernate'
            },
            {
              'tech-tittle': 'Angular',
              'tech-icon-class': 'fab fa-angular'
            },
            {
              'tech-tittle': 'TypeScript',
              'tech-icon-class': 'icon-ts'
            },
            {
              'tech-tittle': 'React',
              'tech-icon-class': 'fab fa-react'
            },
            {
              'tech-tittle': 'JQuery',
              'tech-icon-class': 'icon-jquery'
            }
          ]
        },
        {
          'icon-class': 'fas fa-chalkboard-teacher',
          'title': 'What comes next',
          'items': [
            {
              'tech-tittle': 'Vue.js',
              'tech-icon-class': 'fab fa-vuejs'
            },
            {
              'tech-tittle': 'Go',
              'tech-icon-class': 'icon-go'
            },
            {
              'tech-tittle': 'Kotlin',
              'tech-icon-class': 'icon-kotlin'
            },
            {
              'tech-tittle': 'MongoDB',
              'tech-icon-class': 'icon-mongodb'
            },
            {
              'tech-tittle': 'AWS',
              'tech-icon-class': 'fab fa-aws'
            }
          ]
        }
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}
