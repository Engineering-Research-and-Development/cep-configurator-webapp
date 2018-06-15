import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepEngineModule } from '../cep-engine/cep-engine.module';
import { CepWebAppComponent } from './cep-web-app.component';

@NgModule({
  declarations: [
    CepWebAppComponent
  ],
  imports: [
    CommonModule,
    CepEngineModule
  ],
  exports: [
    CepWebAppComponent
  ]
})
export class CepWebAppModule {}
