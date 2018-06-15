import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultEditorModule } from '../default-editor/default-editor.module';
import { PerseoCoreEditorModule } from '../perseo-core-editor/perseo-core-editor.module';
import { PerseoFrontEndEditorModule } from '../perseo-front-end-editor/perseo-front-end-editor.module';

import { CepEngineEditorComponent } from './cep-engine-editor.component';

@NgModule({
  declarations: [
    CepEngineEditorComponent
  ],
  imports: [
    CommonModule,
    DefaultEditorModule,
    PerseoCoreEditorModule,
    PerseoFrontEndEditorModule
  ],
  exports: [
    CepEngineEditorComponent
  ]
})
export class CepEngineEditorModule {}
