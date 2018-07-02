import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Http } from '@angular/http';

import { RuleService } from '../rule.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules = [];
  engine = {};
  order = 'rule.ruleId';

  constructor(private route: ActivatedRoute, private ruleService: RuleService, private location: Location, private http: Http) {}

  ngOnInit() {
    this.getEngineRules();
    // this.getEngine(name);
  }



  getRule(name: string): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.rules.forEach(element => {
      // tslint:disable-next-line:triple-equals
      if (name == element.name) {
        return element;
      }
    });
  }

  getEngineRules(): any {

    const id = this.route.snapshot.paramMap.get('engineId');
    this.ruleService.getEngineRules(id).subscribe(res => { this.rules = res; } );
  }

  deleteRule(engineId: string, ruleId: string) {
    const url = `http://localhost:8091/engines/${engineId}/rules/${ruleId}`;
    console.log(engineId, ruleId);
    this.http.delete(url).subscribe();
    const index = this.rules.indexOf(ruleId);
    this.rules.splice(index, 1);
  }


  goBack(): void {
    this.location.back();
  }

  test(res) {
    res.forEach(element => {
      console.log('Uzimam element');
      console.log(element);
      console.log('Pocinjem pisanje u niz');
      this.rules.push(element);
      console.log('Zavrsio');
      this.rules.forEach(element2 => {
        console.log(element2);
      });
    });
  }
}
