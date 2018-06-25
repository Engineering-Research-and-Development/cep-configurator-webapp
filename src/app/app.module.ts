import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CepWebAppModule } from './cep-web-app/cep-web-app.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
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
