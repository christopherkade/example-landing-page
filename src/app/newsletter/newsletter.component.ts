import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  animations: [
    trigger('fakeState', [
      state('inactive', style({})),
      state('active', style({
        // fontSize: '150px'
      })),
      transition('inactive => active', animate(500, keyframes([
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' }),
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' }),
        style({ transform: 'translateX(-10%)' }),
        style({ transform: 'translateX(10%)' }),
        style({ transform: 'translateX(-10%)' })
      ])))
    ])
  ]
})
export class NewsletterComponent {
  fakeState = 'inactive';
  email = '';

  constructor() { }

  triggerAnimation() {
    if (this.email === '') {
      console.log('Email empty');
    } else {
      this.fakeState = 'active';
    }
  }
}
