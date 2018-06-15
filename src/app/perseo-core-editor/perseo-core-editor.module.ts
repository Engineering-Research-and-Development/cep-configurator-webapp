import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepRuleModule } from '../cep-rule/cep-rule.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

import { PerseoCoreEditorComponent } from './perseo-core-editor.component';
import { PerseoCoreRuleCreatorComponent } from './perseo-core-rule-creator/perseo-core-rule-creator.component';

@NgModule({
  declarations: [
    PerseoCoreEditorComponent,
    PerseoCoreRuleCreatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    CepRuleModule
  ],
  exports: [
    PerseoCoreEditorComponent
  ]
})
export class PerseoCoreEditorModule { }
