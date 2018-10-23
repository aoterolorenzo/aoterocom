import { Component } from '@angular/core';
import {RoutingAnimationHelper} from '../../../../core/helpers/routing-animation.helper';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-aoterocom',
  templateUrl: './aoterocom.component.html',
  styleUrls: ['./aoterocom.component.scss']
})
export class AoterocomComponent extends RoutingAnimationHelper {

  constructor(public translate: TranslateService) {
    super();
  }

}
