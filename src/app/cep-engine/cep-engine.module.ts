import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CepEngineComponent } from './cepengine.component';
import { CepEngineService } from './cepengine.service';
import { CepEngine } from './cep-engine';

@NgModule({
  declarations: [
    CepEngineComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    CepEngineService
  ],
  exports: [
    CepEngineComponent
  ]
})
export class CepEngineModule {}
