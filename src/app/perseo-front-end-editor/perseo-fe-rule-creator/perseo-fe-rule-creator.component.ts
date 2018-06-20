import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'perseo-fe-rule-creator',
  templateUrl: './perseo-fe-rule-creator.component.html',
  styleUrls: ['./perseo-fe-rule-creator.component.css']
})
export class PerseoFeRuleCreatorComponent implements OnInit {

  perseoFERule = {
    statement: null,
    action: {
      type: null
    },
    description: null
  }
  invalidActionJSON;

  @Input() engineId;

  @Output() creationEvent = new EventEmitter<Boolean>();

  set action(arg) {
    try {
      this.perseoFERule.action = JSON.parse(arg);
      this.invalidActionJSON = false;
    } catch(error) {
      this.invalidActionJSON = true;
    }
  }
  get action() {
    return JSON.stringify(this.perseoFERule.action, null, 2);
  }

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
  }

  submit() {
    var subscription: Subscription = this.service
      .createRule(this.engineId, this.perseoFERule)
      .subscribe({
        next: () => {
          this.creationEvent.emit(true);
        },
        complete: () => { subscription.unsubscribe() }
      });
  }

}
