import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CepRuleModule } from 'app/cep-rule/cep-rule.module';

import { StatementComponent } from './statement/statement.component';
import { EventComponent } from './event/event.component';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    StatementComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CepRuleModule
  ],
  exports: [
    StatementComponent,
    EventComponent
  ]
})
export class CepEngineEditorCommonsModule { }
