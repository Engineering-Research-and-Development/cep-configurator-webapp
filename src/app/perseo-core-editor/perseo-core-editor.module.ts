import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepRuleModule } from '../cep-rule/cep-rule.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatExpansionModule } from '@angular/material';

import { PerseoCoreEditorComponent } from './perseo-core-editor.component';
import { PerseoCoreRuleCreatorComponent } from './perseo-core-rule-creator/perseo-core-rule-creator.component';
import { PerseoCoreRuleListComponent } from './perseo-core-rule-list/perseo-core-rule-list.component';

@NgModule({
  declarations: [
    PerseoCoreEditorComponent,
    PerseoCoreRuleCreatorComponent,
    PerseoCoreRuleListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    CepRuleModule
  ],
  exports: [
    PerseoCoreEditorComponent
  ]
})
export class PerseoCoreEditorModule { }
