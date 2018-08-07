import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {share} from 'rxjs/operators';



@Injectable()
export class AppService {

  url = 'http://localhost:3000/api/v1/resume/alberto';

  resume: any;

  constructor(public http: HttpClient) {

      console.log(this.url + '/lang/' + (localStorage.getItem('LANG') || 'en'));
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
