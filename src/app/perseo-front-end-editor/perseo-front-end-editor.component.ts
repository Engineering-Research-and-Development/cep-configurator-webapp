import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn, flipOutY } from 'ng-animate';

@Component({
  selector: 'perseo-front-end-editor',
  templateUrl: './perseo-front-end-editor.component.html',
  styleUrls: ['./perseo-front-end-editor.component.css'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
          useAnimation(bounceIn)
      ]),
      transition(':leave', [
          useAnimation(flipOutY)
      ])
    ])
  ]
})
export class PerseoFrontEndEditorComponent implements OnInit {

  @Input() engineId;
  trigger = true;

  constructor() { }

  ngOnInit() {
  }

  triggerListUpdate() {
    this.trigger = !this.trigger;
  }

}
