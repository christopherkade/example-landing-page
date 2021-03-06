import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ArgumentComponent } from './argument/argument.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Argument2Component } from './argument2/argument2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowitworksComponent } from './howitworks/howitworks.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewsletterComponent,
    FooterComponent,
    NavComponent,
    ArgumentComponent,
    FeedbackComponent,
    Argument2Component,
    HowitworksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
