import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';

import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.css']
})
export class RuleDetailsComponent implements OnInit {
  // @Input() rule: Rule;

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location, // private detalj: RulesComponent
    private http: Http
  ) {}

  rule: any;
  engine: any;

  ngOnInit(): void {
    this.getRuleDetails();
    this.getEngineDetails();
  }

  getRuleDetails(): void {
    const idRule = this.route.snapshot.paramMap.get('ruleId');
    const idEngine = this.route.snapshot.paramMap.get('engineId');
    this.ruleService.getRuleDetails(idEngine, idRule).subscribe(rule => {
      this.rule = rule;
    });
  }

  updateRule(
    id: string,
    description: string,
    statement: string,
    action: string,
  ) {
    console.log(action);
    const engineId = this.route.snapshot.paramMap.get('engineId');
    if (this.engine.engineType === 'PerseoFontEnd') {
      const rule = {
        id: id,
        description: description,
        statement: statement,
        action: JSON.parse(action)
      };
      this.ruleService.updateRule(engineId, rule);
      console.log(engineId);
    } else {
      const rule = {
        id: id,
        description: description,
        statement: statement
      };
      console.log(engineId);
      this.ruleService.updateRule(engineId, rule);
    }
  }

  getEngineDetails(): void {
    const id = this.route.snapshot.paramMap.get('engineId');
    this.ruleService.getEngineDetails(id).subscribe(engine => {
      this.engine = engine;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
