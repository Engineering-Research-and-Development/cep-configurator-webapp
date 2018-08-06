import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  config = {
    'clientID': '9427e5d4-aef7-4897-9ff7-13a6c588794c',
    'clientSecret': '86b6419f-e342-4399-a838-0d6e2a2536aa',
    'callbackUrl': 'http://localhost:4200/engines',
    'URL': 'http://localhost:3000'
  };


  constructor() { }

  ngOnInit() {

  }

  login() {
    console.log(this.config);
    // tslint:disable-next-line:max-line-length
    window.location.href = `${this.config.URL }/oauth2/authorize/?response_type=code&client_id=${this.config.clientID}&state=xyz&redirect_uri=${this.config.callbackUrl}`;
  }


}
