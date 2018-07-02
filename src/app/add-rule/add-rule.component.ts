import { Component, OnInit, state } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { RuleService } from '../rule.service';
import { createAttribute } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.css']
})
export class AddRuleComponent implements OnInit {
  engines = [];
  selectedEngineId;
  selectedEngine;
  statementText = '';
  sel = document.getSelection();
  saved;
  startPos;
  endPos;

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location,
    private http: Http
  ) {}

  ngOnInit() {
    this.getEngines();
  }


  onEngChange() {
    this.selectedEngine = (this.engines.filter(
      (engine) => {
        return engine.engineId === this.selectedEngineId;
      }
    )[0]);
  }

  addRule(
    id: string,
    engineType: string,
    description: string,
    statement: string,
    actionType: string,
    actionName: string,
    actionValue: boolean,
    typeValue: string
  ) {

    if (engineType === 'PerseoFrontEnd') {
      const rule = {
        description: description,
        statement: statement,
        action: {
          type: actionType,
          parameters: {
            name: actionName,
            value: actionValue,
            type: typeValue
          }
        }
      };

      this.ruleService.addRule(id, rule);
      console.log(rule);

    } else {
      const rule = {
        description: description,
        statement: statement
      };

      this.ruleService.addRule(id, rule);
    }
  }

  getEngines(): void {
    this.ruleService.getEngines().subscribe(engines => {
      this.engines = engines;
    });
  }

  fokus(field) {
    // tslint:disable-next-line:triple-equals
    if (field.selectionStart || field.selectionStart == '0') {
      this.startPos = field.selectionStart;
      this.endPos = field.selectionEnd;
    }
  }


  select1(insertText) {
    const value = this.statementText;
    this.statementText = value.slice(0, this.startPos) + insertText.target.value + value.slice(this.endPos);
  }

  goBack(): void {
    this.location.back();
  }
}
