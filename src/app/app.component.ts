import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('enter', [
      transition(
        ':enter',
        [
          useAnimation(bounceIn)
        ]
      )
    ])
  ]
})
export class AppComponent {}
