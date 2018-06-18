import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepRuleModule } from 'app/cep-rule/cep-rule.module';

import { StatementComponent } from './statement/statement.component';

@NgModule({
  declarations: [
    StatementComponent
  ],
  imports: [
    CommonModule,
    CepRuleModule
  ],
  exports: [
    StatementComponent
  ]
})
export class CepEngineEditorCommonsModule { }
