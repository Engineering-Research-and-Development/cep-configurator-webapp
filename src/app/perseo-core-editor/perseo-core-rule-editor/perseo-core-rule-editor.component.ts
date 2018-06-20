import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'perseo-core-rule-editor',
  templateUrl: './perseo-core-rule-editor.component.html',
  styleUrls: ['./perseo-core-rule-editor.component.css']
})
export class PerseoCoreRuleEditorComponent implements OnInit {

  modifiedRule = {
    description: null,
    statement: null
  }
  @Input() rule;
  @Output() updateEvent = new EventEmitter();
  @Output() deletionEvent = new EventEmitter();

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
    this.modifiedRule = {
      description: this.rule.description,
      statement: this.rule.statement
    }
  }

  modifyRuleStatement(statement) {
    this.modifiedRule.statement = statement;
  }

  update() {
    this.service.updateRule(
      this.rule.owner,
      this.rule.ruleId,
      this.modifiedRule
    ).subscribe( () => {
      this.updateEvent.emit(true);
    });
  }

  delete() {
    this.service.deleteRule(
      this.rule.owner,
      this.rule.ruleId,
    ).subscribe( () => {
      this.deletionEvent.emit(true);
    });
  }

}
