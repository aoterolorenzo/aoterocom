import { Component } from '@angular/core';
import {RoutingAnimationHelper} from '../../../../core/helpers/routing-animation.helper';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-comuniba',
  templateUrl: './comuniba.component.html',
  styleUrls: ['./comuniba.component.scss']
})
export class ComunibaComponent extends RoutingAnimationHelper {

  constructor(public translate: TranslateService) {
    super();
  }

}
