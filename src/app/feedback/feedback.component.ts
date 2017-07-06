import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbacks: any = [
    {
      login: '@notfakemark',
      value: '"It\'s ok."',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@kristobal',
      value: '"This landing page truly is a marvel of human innovation."',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@laurentk',
      value: '"I mean, it\'s your usual landing page."',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@jean',
      value: '"Well..."',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@jonathanmiers',
      value: '"Please don\'t use my tweets"',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@louie',
      value: '"I like it, it\'s elegant, simple and straight to the point."',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@duncanmcnoobmara',
      value: '"Absolutely codetastic"',
      img: 'http://via.placeholder.com/70x70'
    },
    {
      login: '@cenarius',
      value: '"cool beans"',
      img: 'http://via.placeholder.com/70x70'
    }
  ];

  constructor() { }
}
