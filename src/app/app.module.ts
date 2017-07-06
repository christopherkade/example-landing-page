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
import { TeamComponent } from './team/team.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Argument2Component } from './argument2/argument2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewsletterComponent,
    FooterComponent,
    NavComponent,
    ArgumentComponent,
    TeamComponent,
    FeedbackComponent,
    Argument2Component
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
