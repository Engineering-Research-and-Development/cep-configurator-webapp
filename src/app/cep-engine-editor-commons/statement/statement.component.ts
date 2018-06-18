import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cep-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  @Input() initialStatement;
  editable = false;
  statement;

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
    this.statement = this.initialStatement;
  }

  private enableEdit() {
    this.editable = true;
  }

  private resetContent() {
    this.statement = this.initialStatement;
  }

  private cancelEdit() {
    this.resetContent();
    this.editable = false;
  }

}
