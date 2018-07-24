import { Component, OnInit, state } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { RuleService } from '../rule.service';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.css']
})
export class AddRuleComponent implements OnInit {
  engines = [];
  selectedEngineId;
  selectedEngine;
  ruleText = '';
  startPos;
  endPos;
  storage = window.localStorage;
  storedEngine = this.storage.engineType;
  storedEngineId =  this.storage.engineID;
  enabled = false;
  events = [];


  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location,
    private http: Http
  ) {}

  ngOnInit() {
    this.getEngines();
    console.log(this.storedEngine);
    console.log(this.storedEngineId);
    this.getEventTypes(this.storedEngineId);
  }


  test = (x) => { this.enabled = x; };


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
    text: string,
    action: string,
    ruleName: string
  ) {

    if (engineType === 'Perseo') {
      const rule = {
        description: description,
        text: text,
        action: JSON.parse(action),
        name: ruleName,
        active: this.enabled
        };

      this.ruleService.addRule(id, rule);
      console.log(rule);

    } else {
      const rule = {
        description: description,
        text: text
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
    const value = this.ruleText;
    this.ruleText = value.slice(0, this.startPos) + insertText.target.value + value.slice(this.endPos);
  }


  getEventTypes(engineId) {
    this.ruleService.getEventTypes(engineId).subscribe(res => {
      this.events.push(res);
      console.log(this.events);
    });

  }

  goBack(): void {
    this.location.back();
  }
}
