import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cep-engine-editor',
  templateUrl: './cep-engine-editor.component.html',
  styleUrls: ['./cep-engine-editor.component.css']
})
export class CepEngineEditorComponent implements OnInit {

  @Input() cepEngine;

  constructor() { }

  ngOnInit() {
  }

}
