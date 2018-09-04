import {Component, OnInit} from '@angular/core';
import {ChallengeParameters, CognitoCallback, LoggedInCallback} from '../../aws/cognito.service';
import {Router} from '@angular/router';
import {DynamoDBService} from '../../aws/ddb.service';
import {UserLoginService} from '../../aws/user-login.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements CognitoCallback, LoggedInCallback, OnInit {
  email: string;
  password: string;
  errorMessage: any;
  mfaStep = false;
  mfaData = {
    destination: '',
    callback: null
  };

  constructor(public router: Router,
              public ddb: DynamoDBService,
              public userService: UserLoginService,
              private translate: TranslateService) {
    // console.log('LoginComponent constructor');
  }

  ngOnInit() {
    this.errorMessage = null;
    // console.log('Checking if the user is already authenticated. If so, then redirect to the secure site');
    this.userService.isAuthenticated(this);
  }

  onLogin() {
    $('#login-submit').fadeOut(100).fadeIn();
    if (this.email == null || this.password == null) {
      this.errorMessage = this.translate.instant('All fields are required');
      return;
    }
    this.errorMessage = null;
    this.userService.authenticate(this.email, this.password, this);
  }

  cognitoCallback(message: string, result: any) {
    if (result == null) result = '';
    if (message != null) { // error
      this.errorMessage = message;
      // console.log('result: ' + this.errorMessage);
      if (this.errorMessage === 'User is not confirmed.') {
        // console.log('redirecting');
        this.router.navigate(['/home/confirmRegistration', this.email]);
      } else if (this.errorMessage === 'User needs to set password.') {
        // console.log('redirecting to set new password');
        this.router.navigate(['/home/newPassword']);
      }
    } else { // success
      this.ddb.writeLogEntry('login');
      window.location.reload();
    }
  }

  handleMFAStep(challengeName: string, challengeParameters: ChallengeParameters, callback: (confirmationCode: string) => any): void {
    if (challengeName == null && callback == null) challengeName = '';
    this.mfaStep = true;
    this.mfaData.destination = challengeParameters.CODE_DELIVERY_DESTINATION;
    /* this.mfaData.callback = (code: string) => {
      if (code == null || code.length === 0) {
        this.errorMessage = 'Code is required';
        return;
      }
      this.errorMessage = null;
      callback(code);
    };*/
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (message == null) message = '';
    if (isLoggedIn) {
      // this.router.navigate(['/securehome']);
    }
  }

  cancelMFA(): boolean {
    this.mfaStep = false;
    return false;   // necessary to prevent href navigation
  }

  selfHide() {
      $('#modalLoginForm').fadeOut();
  }

}
