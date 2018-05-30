import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Rule } from '../rule.model';
import { RuleService }  from '../rule.service';
import { RulesComponent } from '../rules/rules.component';
import { identifierModuleUrl } from '@angular/compiler';


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
    private location: Location,
    // private detalj: RulesComponent
  ) { }

  rule: any

  ngOnInit(): void {
    this.getRule();
  }

  getRule(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.ruleService.getRule(id).subscribe(rule => {
            this.rule = rule;      
      });  
  }
  
  goBack(): void {
    this.location.back();
  }
}
