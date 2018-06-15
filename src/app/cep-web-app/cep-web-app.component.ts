import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cep-web-app',
  templateUrl: './cep-web-app.component.html',
  styleUrls: ['./cep-web-app.component.css']
})
export class CepWebAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private test(x){
    console.log(x)
  }

}
