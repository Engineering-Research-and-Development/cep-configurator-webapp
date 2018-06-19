import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'perseo-fe-rule-editor',
  templateUrl: './perseo-fe-rule-editor.component.html',
  styleUrls: ['./perseo-fe-rule-editor.component.css']
})
export class PerseoFeRuleEditorComponent implements OnInit {

  modifiedRule = {
    description: null,
    statement: null,
    action: null
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
      statement: this.rule.statement,
      action: JSON.parse(
        this.rule.action
      )
    }
  }

  modifyRuleStatement(statement) {
    this.modifiedRule.statement = statement;
  }

  modifyRuleAction(action) {
    this.modifiedRule.action = JSON.parse(action);
  }

  update() {
    this.service.updateRule(
      this.rule.owner,
      this.rule.ruleId,
      this.modifiedRule
    ).subscribe(() => {
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