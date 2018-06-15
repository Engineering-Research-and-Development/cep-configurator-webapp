import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepEngineModule } from '../cep-engine/cep-engine.module';
import { CepEngineEditorModule } from '../cep-engine-editor/cep-engine-editor.module';

import { CepWebAppComponent } from './cep-web-app.component';

@NgModule({
  declarations: [
    CepWebAppComponent
  ],
  imports: [
    CommonModule,
    CepEngineModule,
    CepEngineEditorModule
  ],
  exports: [
    CepWebAppComponent
  ]
})
export class CepWebAppModule {}
