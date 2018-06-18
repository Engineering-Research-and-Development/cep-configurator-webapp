import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'perseo-core-rule-creator',
  templateUrl: './perseo-core-rule-creator.component.html',
  styleUrls: ['./perseo-core-rule-creator.component.css']
})
export class PerseoCoreRuleCreatorComponent implements OnInit {

  @Input() engineId;

  @Output() creationEvent = new EventEmitter<Boolean>();

  perseoCoreRule = {
    statement: null,
    description: null
  }

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
  }

  submit() {
    this.service
      .createRule(this.engineId, this.perseoCoreRule)
      .subscribe( () => {
        this.creationEvent.emit(true);
      });
  }

}
