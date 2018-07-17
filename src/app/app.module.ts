
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from './../../ng-uikit-pro-standard';
import {ContentComponent} from "./main/content/content.component";
import {NavbarComponent} from "./main/navbar/navbar.component";
import {FooterComponent} from "./main/footer/footer.component";
import {ParticlesModule} from "angular-particle";
import { HomeComponent } from './main/content/home/home.component';
import { CoverComponent } from './main/content/home/cover/cover.component';
import { AboutMeComponent } from './main/content/home/about-me/about-me.component';
import { ResumeComponent } from './main/content/home/resume/resume.component';
import { SimpleTypewritterComponent } from './core/modules/typewritter/simple-typewritter.component';
import { MiddleParallaxComponent } from './main/content/home/middle-parallax/middle-parallax.component';
import { TechsComponent } from './main/content/home/techs/techs.component';
import { SafeHtml } from './core/pipes/safeHtml.pipe';

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
    SafeHtml
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ParticlesModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCodAwA7RGboaeG73PGSSe8RSFXfA6hhyQ'
    })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }


