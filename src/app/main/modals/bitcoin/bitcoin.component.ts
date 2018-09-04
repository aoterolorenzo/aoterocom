import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {

  bitcoinWallet: String;
  btcCopyButton: any;
  btcCBVal: any;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.bitcoinWallet = environment.bitcoin_wallet;
    this.btcCopyButton = $('#btc-copy-button');
    this.btcCBVal = this.btcCopyButton.html();
  }

  selfHide() {
    $('#bitcoin-modal').fadeOut();
  }

  copyWalletAddress() {

    // this.translate.instant('Your password')
    const $temp = $('<input>');
    $('body').append($temp);
    $temp.val($('#bitcoin-address').text()).select();
    document.execCommand('copy');
    $temp.remove();


    const translate = this.translate;
    const btcCopyButton = this.btcCopyButton;
    const btcCBVal = this.btcCBVal;


    this.btcCopyButton.delay(300)
      .queue(function (next: any) {
        btcCopyButton
          .html(translate.instant('Copied!'))
          .removeClass('blue').removeClass('darken-ao')
          .addClass('green').addClass('darken-4')

          .delay(1000).queue(function(next2: any) {
          btcCopyButton.html(btcCBVal)
            .removeClass('green').removeClass('darken-4')
            .addClass('blue').addClass('darken-ao');
          next2();
        });
        next();
      });

  }
}
