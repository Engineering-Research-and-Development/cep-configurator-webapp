import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CepRuleModule } from 'app/cep-rule/cep-rule.module';

import { StatementComponent } from './statement/statement.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    StatementComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CepRuleModule
  ],
  exports: [
    StatementComponent
  ]
})
export class CepEngineEditorCommonsModule { }
