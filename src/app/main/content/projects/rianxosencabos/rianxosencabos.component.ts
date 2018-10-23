import { Component } from '@angular/core';
import {RoutingAnimationHelper} from '../../../../core/helpers/routing-animation.helper';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-rianxosencabos',
  templateUrl: './rianxosencabos.component.html',
  styleUrls: ['./rianxosencabos.component.scss']
})
export class RianxosencabosComponent extends RoutingAnimationHelper {

  constructor(public translate: TranslateService) {
    super();
  }
  imagesBasic = [
    { img: '/assets/img/rsc/portal.png', thumb:
        '/assets/img/rsc/portal.png', description: 'Image 1' },
    { img: '/assets/img/rsc/estadoaps2.png', thumb:
        '/assets/img/rsc/estadoaps2.png', description: 'Image 2' },
    { img: '/assets/img/rsc/parajin2.png', thumb:
        '/assets/img/rsc/parajin2.png', description: 'Image 5' },
    { img: '/assets/img/rsc/membersadmin.png', thumb:
        '/assets/img/rsc/membersadmin.png', description: 'Image 3' },
    { img: '/assets/img/rsc/owncloudrsc.png', thumb:
        '/assets/img/rsc/owncloudrsc.png', description: 'Image 4' },
    { img: '/assets/img/rsc/croquis.png', thumb:
        '/assets/img/rsc/croquis.png', description: 'Image 6' },
    { img: '/assets/img/rsc/rexistro7.png', thumb:
        '/assets/img/rsc/rexistro7.png', description: 'Image 7' },
    { img: '/assets/img/rsc/estadisticaspersoais.png', thumb:
        '/assets/img/rsc/estadisticaspersoais.png', description: 'Image 8' },
    { img: '/assets/img/rsc/webmail.png', thumb:
        '/assets/img/rsc/webmail.png', description: 'Image 9' }
  ];



}
