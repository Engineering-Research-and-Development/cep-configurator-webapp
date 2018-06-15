import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cep-web-app',
  templateUrl: './cep-web-app.component.html',
  styleUrls: ['./cep-web-app.component.css']
})
export class CepWebAppComponent implements OnInit {

  engine;

  constructor() { }

  ngOnInit() {
  }

  private updateEditor(engine) {
    this.engine = engine;
  }

}
