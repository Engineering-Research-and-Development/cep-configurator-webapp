import { Component, OnInit, Input } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'perseo-core-rule-list',
  templateUrl: './perseo-core-rule-list.component.html',
  styleUrls: ['./perseo-core-rule-list.component.css']
})
export class PerseoCoreRuleListComponent implements OnInit {

  @Input() engineId;

  rules;

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
    this.updateRulesList();
  }

  private updateRulesList() {
    this.service.getRules(this.engineId).subscribe(
      (data) => {this.rules = data}
    );
  }

}
