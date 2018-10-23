
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from './../../ng-uikit-pro-standard';
import {ContentComponent} from './main/content/content.component';
import {NavbarComponent} from './main/navbar/navbar.component';
import {FooterComponent} from './main/footer/footer.component';
import {ParticlesModule} from 'angular-particle';
import { HomeComponent } from './main/content/home/home.component';
import { CoverComponent } from './main/content/home/cover/cover.component';
import { AboutMeComponent } from './main/content/home/about-me/about-me.component';
import { ResumeComponent } from './main/content/home/resume/resume.component';
import { SimpleTypewritterComponent } from './core/modules/typewritter/simple-typewritter.component';
import { MiddleParallaxComponent } from './main/content/home/middle-parallax/middle-parallax.component';
import { TechsComponent } from './main/content/home/techs/techs.component';
import {AppService} from './app.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PreloaderComponent } from './main/preloader/preloader.component';
import { ExperienceComponent } from './main/content/home/experience/experience.component';
import { BlogComponent } from './main/content/blog/blog.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import {CognitoUtil} from './aws/cognito.service';
import {AwsUtil} from './aws/aws.service';
import {DynamoDBService} from './aws/ddb.service';
import {UserParametersService} from './aws/user-parameters.service';
import {UserLoginService} from './aws/user-login.service';
import { BitcoinComponent } from './main/modals/bitcoin/bitcoin.component';
import { EthereumComponent } from './main/modals/ethereum/ethereum.component';
import { AoterocomComponent } from './main/content/projects/aoterocom/aoterocom.component';
import { RianxosencabosComponent } from './main/content/projects/rianxosencabos/rianxosencabos.component';
import { ComunibaComponent } from './main/content/projects/comuniba/comuniba.component';
import {SanitizeT} from './core/pipes/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoverComponent,
    AboutMeComponent,
    ResumeComponent,
    SimpleTypewritterComponent,
    MiddleParallaxComponent,
    TechsComponent,
    SanitizeT,
    PreloaderComponent,
    ExperienceComponent,
    BlogComponent,
    LoginComponent,
    BitcoinComponent,
    EthereumComponent,
    AoterocomComponent,
    RianxosencabosComponent,
    ComunibaComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCodAwA7RGboaeG73PGSSe8RSFXfA6hhyQ'
    })
  ],
  providers: [
    MDBSpinningPreloader,
    AppService,
    CognitoUtil,
    AwsUtil,
    DynamoDBService,
    UserLoginService,
    UserParametersService],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


