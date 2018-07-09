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

  deleteEngine(engineId) {
    this.ruleService.deleteEngine(engineId);
    // const index = this.engines.findIndex(compare);
    const index = this.engines.findIndex(compare);
    console.log(engineId, index);
    this.engines.splice(index, 1);

    function compare(element) {
      return element.engineId === engineId;
    }
  }
}
