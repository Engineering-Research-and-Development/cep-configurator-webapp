import { Component, OnInit } from '@angular/core';

import { Rule } from '../rule.model';
// import { RULES } from '../mock-rules';
import { RuleService } from '../rule.service';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  // selectedRule: Rule;- no longer in use

  rules=[];

  // showDetails(rule: Rule): void{ - more ded code
  //   this.selectedRule = rule;
  //   console.log("snj");
    
  // }

  constructor(private ruleModel: Rule, private ruleService: RuleService){}

  ngOnInit() {
    // this.rules.push(this.ruleModel)
    // console.log(this.rules);
    this.getRules();
  }

  getRules(): void{
    this.ruleService.getRules().subscribe(rules => {
            this.rules = rules;
      
      });
  }

  getRule(name: string): void{
   this.rules.forEach((element) => {
      if(name==element.name){
        return element;
      }
    });
  }

  deleteRule(id: number){
    this.ruleService.deleteRule(id).subscribe(res =>{ 
      this.getRules();
      console.log('pravilo sa ID '+id+' obrisano')});
    
  }

  
}