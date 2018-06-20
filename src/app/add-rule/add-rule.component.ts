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

  // rule: Rule;

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location,
    private http: Http
  ) {}

  ngOnInit() {
    this.getEngines();
  }

  addRule(
    id: string,
    description: string,
    statement: string,
    actionType: string,
    actionName: string,
    actionValue: boolean,
    typeValue: string
  ) {

    if (id === 'perseo-fe') {
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

  goBack(): void {
    this.location.back();
  }
}
