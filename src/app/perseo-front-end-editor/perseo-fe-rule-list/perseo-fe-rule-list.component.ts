import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'perseo-fe-rule-list',
  templateUrl: './perseo-fe-rule-list.component.html',
  styleUrls: ['./perseo-fe-rule-list.component.css']
})
export class PerseoFeRuleListComponent implements OnInit, OnChanges {

  rules;
  @Input() engineId;
  @Input() trigger;
  @Output() triggerChange = new EventEmitter();

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
    this.updateRulesList();
  }

  ngOnChanges() {
    this.updateRulesList();
  }

  private updateRulesList() {
    var subscription: Subscription = this.service
      .getRules(this.engineId)
      .subscribe({
        next: (data) => {this.rules = data},
        complete: () => { subscription.unsubscribe() }
      });
  }

  triggerSelf() {
    this.trigger = !this.trigger;
    this.triggerChange.emit(this.trigger);
  }

}