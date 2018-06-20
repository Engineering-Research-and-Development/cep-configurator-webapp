import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';
import { Subscription } from 'rxjs';

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
    var subscription: Subscription = this.service
      .createRule(this.engineId, this.perseoCoreRule)
      .subscribe({
        next: () => {
          this.creationEvent.emit(true);
        },
        complete: () => { subscription.unsubscribe() }
      });
  }

}
