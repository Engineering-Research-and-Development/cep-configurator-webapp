import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CepRuleService } from 'app/cep-rule/cep-rule.service';

@Component({
  selector: 'cep-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  @Input() initialStatement;
  @Output() changedStatement = new EventEmitter();
  editable = false;

  constructor(
    private service: CepRuleService
  ) { }

  ngOnInit() {
  }

  private toggleEdit() {

  }

  test(x) {
    console.log('testing');
    console.log(x)
  }

}
