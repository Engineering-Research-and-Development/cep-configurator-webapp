import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RuleService } from '../rule.service';

@Component({
  selector: 'app-edit-rule',
  templateUrl: './edit-rule.component.html',
  styleUrls: ['./edit-rule.component.css']
})
export class EditRuleComponent implements OnInit {


  rule: any;

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location,
    private http: Http
    // private detalj: RulesComponent
  ) { }

  ngOnInit(): void {
    this.getRule();


  }

  getRule(): void {
  //   const name = this.route.snapshot.paramMap.get('name');

  //   this.ruleService.getRule(name).subscribe(rule => {
  //           this.rule = rule;
  //     });
  }

  goBack(): void {
    this.location.back();
  }



}
