import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import * as $ from "jquery";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.scss']
})
export class EthereumComponent implements OnInit {

  ethereumWallet: String;
  ethCopyButton: any;
  ethCBVal: any;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.ethereumWallet = environment.ethereum_wallet;
    this.ethCopyButton = $('#eth-copy-button');
    this.ethCBVal = this.ethCopyButton.html();
  }


  selfHide() {
    $('#ethereum-modal').fadeOut();
  }

  copyWalletAddress() {

    // this.translate.instant('Your password')
    const $temp = $('<input>');
    $('body').append($temp);
    $temp.val($('#ethereum-address').text()).select();
    document.execCommand('copy');
    $temp.remove();


    const translate = this.translate;
    const ethCopyButton = this.ethCopyButton;
    const ethCBVal = this.ethCBVal;


    this.ethCopyButton.delay(300)
      .queue(function (next: any) {
        ethCopyButton
          .html(translate.instant('Copied!'))
          .removeClass('blue').removeClass('darken-ao')
          .addClass('green').addClass('darken-4')

          .delay(1000).queue(function(next2: any) {
          ethCopyButton.html(ethCBVal)
            .removeClass('green').removeClass('darken-4')
            .addClass('blue').addClass('darken-ao');
          next2();
        });
        next();
      });

  }


}
