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
      img: '../assets/img/profile.png'
    },
    {
      login: '@kristobal',
      value: '"This landing page truly is a marvel of human innovation."',
      img: '../assets/img/profile.png'
    },
    {
      login: '@laurentk',
      value: '"I mean, it\'s your usual landing page."',
      img: '../assets/img/profile.png'
    },
    {
      login: '@jean',
      value: '"Well..."',
      img: '../assets/img/profile.png'
    },
    {
      login: '@jonathanmiers',
      value: '"Please don\'t use my tweets"',
      img: '../assets/img/profile.png'
    },
    {
      login: '@louie',
      value: '"I like it, it\'s elegant, simple and straightforward."',
      img: '../assets/img/profile.png'
    },
    {
      login: '@duncanmcnoobmara',
      value: '"Absolutely codetastic"',
      img: '../assets/img/profile.png'
    },
    {
      login: '@cenarius',
      value: '"cool beans"',
      img: '../assets/img/profile.png'
    }
  ];

  constructor() { }
}
