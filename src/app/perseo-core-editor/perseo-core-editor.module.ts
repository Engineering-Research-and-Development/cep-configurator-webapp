import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepRuleModule } from '../cep-rule/cep-rule.module';
import { FormsModule } from '@angular/forms';
import { CepEngineEditorCommonsModule } from 'app/cep-engine-editor-commons/cep-engine-editor-commons.module';
import {
  MatInputModule,
  MatExpansionModule,
  MatButtonModule
} from '@angular/material';

import { PerseoCoreEditorComponent } from './perseo-core-editor.component';
import { PerseoCoreRuleCreatorComponent } from './perseo-core-rule-creator/perseo-core-rule-creator.component';
import { PerseoCoreRuleListComponent } from './perseo-core-rule-list/perseo-core-rule-list.component';
import { PerseoCoreRuleEditorComponent } from './perseo-core-rule-editor/perseo-core-rule-editor.component';

@NgModule({
  declarations: [
    PerseoCoreEditorComponent,
    PerseoCoreRuleCreatorComponent,
    PerseoCoreRuleListComponent,
    PerseoCoreRuleEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    CepEngineEditorCommonsModule,
    CepRuleModule
  ],
  exports: [
    PerseoCoreEditorComponent
  ]
})
export class PerseoCoreEditorModule { }
