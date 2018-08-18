import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {share} from 'rxjs/operators';



@Injectable()
export class AppService {

  url = 'http://' + window.location.hostname + ':3000/api/v1/resume/alberto';

  resume: any;

  constructor(public http: HttpClient) {

      this.resume = this.http.get(this.url + '/lang/' + (localStorage.getItem('LANG') || 'en'))
        .pipe(share());

  }

  getResume() {
    return this.resume;
  }

  generateImage(url: string) {
    this.http.get(url);
  }
}
