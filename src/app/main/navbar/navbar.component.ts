import {Component, OnInit} from '@angular/core';
import {Callback, CognitoUtil, LoggedInCallback} from '../../aws/cognito.service';
import {Router} from '@angular/router';
import {UserLoginService} from '../../aws/user-login.service';
import {UserParametersService} from '../../aws/user-parameters.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements LoggedInCallback, OnInit {



  public parameters: Array<Parameters> = [];
  public cognitoId: String;
  public guest = true;

  constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService,
              public cognitoUtil: CognitoUtil) {
    this.userService.isAuthenticated(this);
    // console.log('In NavbarComponent');
  }

  switchLanguage(language: string) {
    localStorage.setItem('LANG', language);
    location.reload(true);
  }

  showLogin() {
    $('#modalLoginForm').fadeIn();
  }

  reload() {
    window.location.reload();
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (message == null) message = '';
    if (isLoggedIn) {
      this.guest = !isLoggedIn;
      this.userParams.getParameters(new GetParametersCallback(this, this.cognitoUtil));
    }
  }

  ngOnInit(): void {
    // console.log(this.parameters);
  }
}

export class Parameters {
  name: string;
  value: string;
}

export class GetParametersCallback implements Callback {

  constructor(public me: NavbarComponent, public cognitoUtil: CognitoUtil) {

  }

  callback() {

  }

  callbackWithParam(result: any) {

    for (let i = 0; i < result.length; i++) {
      const parameter = new Parameters();
      parameter.name = result[i].getName();
      parameter.value = result[i].getValue();
      this.me.parameters.push(parameter);
    }
    const param = new Parameters();
    param.name = 'cognito ID';
    param.value = this.cognitoUtil.getCognitoIdentity();
    this.me.parameters.push(param);
  }
}

