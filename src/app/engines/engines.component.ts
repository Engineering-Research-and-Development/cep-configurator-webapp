import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RuleService } from '../rule.service';


@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css']
})
export class EnginesComponent implements OnInit {

  engines = [];

  getEngines(): void {
    this.ruleService.getEngines().subscribe(engines => {
      this.engines = engines;
    });
  }

  constructor(private ruleService: RuleService) { }

  ngOnInit() {
    this.getEngines();
  }

}
