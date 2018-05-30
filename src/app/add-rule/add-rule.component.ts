import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { RuleService } from '../rule.service';
import { Rule } from '../rule.model';

@Component({
  selector: 'app-add-rule',
  templateUrl: './add-rule.component.html',
  styleUrls: ['./add-rule.component.css']
})
export class AddRuleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location,
    private http: Http
  ) { }

  ngOnInit() {
  }

  addRule(id: number, description: string, statement: string){
    let url = `http://localhost:3000/rules/`;
    
    // console.log(this.rule);
    this.http.post(url, {"id": id, "description": description, "statement": statement}).subscribe(res=>console.log(res.json()));
  }
  

  goBack(): void {
    this.location.back();
  }
}
