import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RuleService } from '../rule.service';
import { identifierModuleUrl } from '@angular/compiler';
import { EnginesComponent } from '../engines/engines.component';

@Component({
  selector: 'app-engine-details',
  templateUrl: './engine-details.component.html',
  styleUrls: ['./engine-details.component.css']
})
export class EngineDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private location: Location
  ) {}

  engine: any;

  ngOnInit(): void {
    this.getEngineDetails();
  }

  getEngineDetails(): void {
    const id = this.route.snapshot.paramMap.get('engineId');
    this.ruleService.getEngineDetails(id).subscribe(engine => {
      this.engine = engine;
    });
  }

  updateEngine(id, type, url) {
    const data = {
      engineId: id,
      engineType: type,
      hostUrl: url
    };
    this.ruleService.updateEngine(data);
  }
  goBack(): void {
    this.location.back();
  }

}
