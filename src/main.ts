import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const forceSSL = function () {
  if (window.location.protocol !== 'https') {
    window.location.href = window.location.href.replace('http', 'https');
  }
};
forceSSL();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
