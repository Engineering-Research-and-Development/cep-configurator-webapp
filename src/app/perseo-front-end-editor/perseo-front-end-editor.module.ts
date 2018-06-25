import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepRuleModule } from '../cep-rule/cep-rule.module';
import { FormsModule } from '@angular/forms';
import { CepEngineEditorCommonsModule } from 'app/cep-engine-editor-commons/cep-engine-editor-commons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatExpansionModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { PerseoFrontEndEditorComponent } from './perseo-front-end-editor.component';
import { PerseoFeRuleCreatorComponent } from './perseo-fe-rule-creator/perseo-fe-rule-creator.component';
import { PerseoFeRuleEditorComponent } from './perseo-fe-rule-editor/perseo-fe-rule-editor.component';
import { PerseoFeRuleListComponent } from './perseo-fe-rule-list/perseo-fe-rule-list.component';

@NgModule({
  declarations: [
    PerseoFrontEndEditorComponent,
    PerseoFeRuleCreatorComponent,
    PerseoFeRuleEditorComponent,
    PerseoFeRuleListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    CepEngineEditorCommonsModule,
    CepRuleModule
  ],
  exports: [
    PerseoFrontEndEditorComponent
  ]
})
export class PerseoFrontEndEditorModule { }
