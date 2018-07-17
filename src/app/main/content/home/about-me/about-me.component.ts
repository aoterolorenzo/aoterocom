import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  section = {
    'icon': 'fa fa-quote-left',
    'title': 'About me'
    };

  personal_data = {
    'profile_img': 'https://instagram.flcg1-1.fna.fbcdn.net/vp/829d957fd7d851275f72eb05e6e80dd1/5BD026' +
    '74/t51.2885-15/e35/20398099_232663610588492_5005223005492609024_n.jpg',
    'data_entries': [
      {
        'placeholder': 'Name',
        'content': 'Alberto Otero Lorenzo'
      },
      {
        'placeholder': 'Birth Place',
        'content': 'Rianxo, A Coruña'
      },
      {
        'placeholder': 'Birth Date',
        'content': 'September 1991'},
      {
        'placeholder': 'Nationality',
        'content': 'Spain'
      },
      {
        'placeholder': 'Driving license',
        'content': 'cat B'
      },
      {
        'placeholder': 'Languages',
        'content': 'ES, GL, EN, PT'
      }
    ],

  };

  speech = [
      {
        'paragraph_content': 'Con años de experiencia funcional en el ámbito informático, desde sistemas UNIX y ' +
        'redes, hasta distintos lenguajes de programación y frameworks, no solo en los impartidos en la facultad. ' +
        'Versatilidad y la facilidad para enfrentarme a cualquier proyecto (con o sin las aptitudes necesarias) y ' +
        'con la idea recurrente de optimización y rendimiento en lo que hago. Si no se algo, lo aprendo.\n'
      },
      {
        'paragraph_content': 'Aún no sabiendo hacer algo, teniendo que aprenderlo o que sacármelo de la manga, ' +
        'ha de quedar de una manera sensata. Prefiero comerme la cabeza y desanidar un puñado de if\'s aplicando ' +
        'lógica booleana y Karnaugh, que dejarlos de forma redundante o poco elegante, aunque "funcionen".'
      },
      {
        'paragraph_content': 'Muy fan de las filosofías DRY (Don\'t Repeat Yourself) y KISS (Keep It Simple, ' +
        'Stupid!), no solo en la informática sino en la vida.'
      }
    ];

  buttons = [
      {
        'icon': 'fas fa-download',
        'color': 'blue darken-ao',
        'text': 'Download resume'
      },
      {
        'icon': 'fas fa-envelope',
        'color': 'grey darken-3',
        'text': 'Hire me'
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
