import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, JsonpModule, Jsonp } from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CepWebAppModule } from './cep-web-app/cep-web-app.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,

    CepWebAppModule
  ],
  providers: [
    {
      provide: 'CepMiddlewareUrl',
      useValue: "http://localhost:8091"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
