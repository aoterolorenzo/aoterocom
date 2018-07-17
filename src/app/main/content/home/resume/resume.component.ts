import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  section = [
    {
      'icon': 'fa fa-mortar-board',
      'title': 'Education'
    },
    {
      'icon': 'fa fa-lightbulb',
      'title': 'Skills'
    }
  ];

  education = [
    {
      'title': 'Bachelor\'s Degree in Computer Engineering',
      'center': 'Universidade da Coruña',
      'years': '2014-2018',
      'icon': 'fa fa-mortar-board'
    },
    {
      'title': 'Certificate of Higher Education in Computing and IT',
      'center': 'CIFP Politécnico de Santiago de Compostela',
      'years': '2010 - 2013',
      'icon': 'fa fa-university'
    },
    {
      'title': 'General Certificate of Education',
      'center': 'IES Félix Muriel (Rianxo)',
      'years': '2007 - 2010',
      'icon': 'fa fa-book'
    },
    {
      'title': 'General Certificate of Secondary Education',
      'center': 'IES Félix Muriel (Rianxo)',
      'years': '2003 - 2007',
      'icon': 'fa fa-pencil'
    },


  ];

  skills = [
    {
      'title': 'Web Design',
      'percent': '95',
      'style': {'width': '95%'}
    },
    {
      'title': 'Development',
      'percent': '90',
      'style': {'width': '90%'}
    },
    {
      'title': 'UNIX Systems',
      'percent': '80',
      'style': {'width': '80%'}
    },
    {
      'title': 'Networking',
      'percent': '85',
      'style': {'width': '85%'}
    },
    {
      'title': 'Graphic Design',
      'percent': '65',
      'style': {'width': '65%'}
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
