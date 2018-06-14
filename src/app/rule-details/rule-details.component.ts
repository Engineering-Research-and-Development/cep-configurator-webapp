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

  ngOnInit(): void {
    this.getRuleDetails();
  }

  getRuleDetails(): void {
    const idRule = this.route.snapshot.paramMap.get('ruleId');
    const idEngine = this.route.snapshot.paramMap.get('engineId');
    console.log(idRule, idEngine);
    this.ruleService.getRuleDetails(idEngine, idRule).subscribe(rule => {
      this.rule = rule;
    });
  }

  saveChange(id: string, description: string, statement: string) {
    const engineId = this.route.snapshot.paramMap.get('engineId');
    const url = `http://localhost:8091/engines/${engineId}/rules/${id}`;

      this.http.put(url, {'description': description, 'statement': statement})
      .subscribe(res => console.log('saved'));

    }


  goBack(): void {
    this.location.back();
  }
}
