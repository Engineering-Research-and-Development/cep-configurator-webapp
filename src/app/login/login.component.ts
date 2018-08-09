import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  config = {
    'clientID': 'c25015f3bb924a76b5828a43ed487ca1',
    'clientSecret': '045b472fc0e34b9ebe5e38ac70753765',
    'callbackUrl': 'http://localhost:4200/engines',
    'URL': 'http://localhost:3000'
  };


  constructor() { }

  ngOnInit() {

  }

  login() {
    console.log(this.config);
    // tslint:disable-next-line:max-line-length
    window.location.href = `${this.config.URL }/oauth2/authorize/?response_type=token&client_id=${this.config.clientID}&state=xyz&redirect_uri=${this.config.callbackUrl}`;
  }


}
