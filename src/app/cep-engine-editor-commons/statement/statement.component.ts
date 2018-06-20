import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'cep-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  editable = false;
  statement;
  @Input() initialStatement;
  @Output() currentStatement = new EventEmitter();

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
    this.statement = this.initialStatement;
  }

  emitStatement() {
    this.currentStatement.emit(this.statement);
  }

  private enableEdit() {
    this.editable = true;
  }

  private resetContent() {
    this.statement = this.initialStatement;
    this.emitStatement();
  }

  private cancelEdit() {
    this.resetContent();
    this.editable = false;
  }

}
