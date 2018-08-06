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
  enginesUser = [];
  storage = window.localStorage;
  userType = {
    user: 'admin'
  };
  keepRule = false;

  test = (x) => { this.keepRule = x; };


  getEngines(): void {
    if (this.userType.user === 'admin') {
      this.ruleService.getEngines().subscribe(engines => {
        this.engines = engines;
      });
    } else if (this.userType.user === 'user') {
     this.ruleService.getEngine(this.storage.getItem('userEngine')).subscribe(userEngine => {
       this.engines.push(userEngine);
        console.log(userEngine);
     });
    }
  }

  constructor(private ruleService: RuleService) { }

  ngOnInit() {
    this.getEngines();
    // this.storage.clear();
    console.log(this.storage);
  }

  deleteEngine(engineId) {
    this.ruleService.deleteEngine(engineId, this.keepRule);
    // const index = this.engines.findIndex(compare);
    const index = this.engines.findIndex(compare);
    console.log(engineId, index);
    this.engines.splice(index, 1);

    function compare(element) {
      return element.engineId === engineId;
    }
  }

  selectEngine(id, type) {
    this.storage.setItem('engineID', id);
    this.storage.setItem('engineType', type);
    this.enginesUser = [];
    this.engines.forEach(element => {
       if (element.engineId === this.storage.engineID) {
        this.storage.setItem('userEngine', element.engineId);
        console.log(this.storage.engineID);
       }
    });
  }

}
