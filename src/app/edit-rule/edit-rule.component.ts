import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Rule } from '../rule.model';
import { RuleService } from '../rule.service'
import { RulesComponent } from '../rules/rules.component';

@Component({
  selector: 'app-edit-rule',
  templateUrl: './edit-rule.component.html',
  styleUrls: ['./edit-rule.component.css']
})
export class EditRuleComponent implements OnInit {

  
  rule: any

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
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.ruleService.getRule(id).subscribe(rule => {
            this.rule = rule;      
      });  
  }
  
  goBack(): void {
    this.location.back();
  }
  
  save(id: number, description: string, statement: string){
    let url = `http://localhost:3000/rules/${id}`;
    
    // console.log(this.rule);
    this.http.put(url, {"id": id, "description": description, "statement": statement}).subscribe(res=>console.log(res.json()));
  }
 

}
