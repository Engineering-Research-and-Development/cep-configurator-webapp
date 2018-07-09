import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RuleService } from '../rule.service';

@Component({
  selector: 'app-add-engine',
  templateUrl: './add-engine.component.html',
  styleUrls: ['./add-engine.component.css']
})
export class AddEngineComponent implements OnInit {

  constructor(
    private ruleService: RuleService,
    private location: Location
  ) {}

  ngOnInit() {
  }

  addEngine(id, type, url) {
    const data = {
      engineId: id,
      engineType: type,
      hostUrl: url
    };

    this.ruleService.addEngine(data);
  }

  goBack(): void {
    this.location.back();
  }

}
