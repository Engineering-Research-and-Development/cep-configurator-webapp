import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'perseo-core-editor',
  templateUrl: './perseo-core-editor.component.html',
  styleUrls: ['./perseo-core-editor.component.css'],
  animations: [
    trigger('inOut', [
      transition(':enter', [
          useAnimation(bounceIn)
      ])
    ])
  ]
})
export class PerseoCoreEditorComponent implements OnInit {

  @Input() engineId;
  trigger = true;

  constructor() { }

  ngOnInit() {
  }

  triggerListUpdate() {
    this.trigger = !this.trigger;
  }

}
