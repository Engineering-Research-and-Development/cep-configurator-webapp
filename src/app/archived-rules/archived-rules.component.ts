import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RuleService } from '../rule.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-archived-rules',
  templateUrl: './archived-rules.component.html',
  styleUrls: ['./archived-rules.component.css']
})
export class ArchivedRulesComponent implements OnInit {
  [x: string]: any;

  archiveRules = [];
  restored = false;
  storage = window.localStorage;

  test = (x) => { this.restored = x; };


  constructor(private location: Location, private service: RuleService) { }

  ngOnInit() {
    this.getArchiveRules();
  }

  getArchiveRules() {
    this.service.getArchiveRules().subscribe(res => this.archiveRules = res);
  }

  restore(ruleName, ruleTxt, ruleAction, ruleDescription) {

    const rule = {
     name: ruleName,
     text: ruleTxt,
     description: ruleDescription,
     action: ruleAction,
     active: false
    };
    console.log(rule, this.storage.engineID);
    this.service.addRule(this.storage.engineID, rule);
  }

  goBack(): void {
    this.location.back();
  }
}

