import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {share} from 'rxjs/operators';



@Injectable()
export class AppService {

  resume = this.http.get('http://localhost:3000/api/v1/resume').pipe(share());

  constructor(public http: HttpClient) {

  }

  getResume() {
    return this.resume;
  }
}
