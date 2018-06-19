import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'perseo-front-end-editor',
  templateUrl: './perseo-front-end-editor.component.html',
  styleUrls: ['./perseo-front-end-editor.component.css']
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
