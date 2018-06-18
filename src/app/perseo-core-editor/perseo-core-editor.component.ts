import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'perseo-core-editor',
  templateUrl: './perseo-core-editor.component.html',
  styleUrls: ['./perseo-core-editor.component.css']
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
