import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CepEngine } from './cep-engine';
import { CepEngineService } from './cep-engine.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cep-engine',
  templateUrl: './cep-engine.component.html',
  styleUrls: ['./cep-engine.component.css']
})
export class CepEngineComponent implements OnInit {

  @Output() engineSelection:EventEmitter<CepEngine> = new EventEmitter<CepEngine>();
  private selectedEngine: any;
  private cepEngines: any;

  constructor(public service: CepEngineService) {}

  ngOnInit() {
    var subscription: Subscription = this.service
    .getEngines()
    .subscribe({
      next: (engines) => {
        this.cepEngines = engines;
      },
      complete: () => { subscription.unsubscribe() }
    });
  }

  private triggerEngineSelection(event) {
    var emitee = new CepEngine();
    emitee.engineId = event.value.engineId;
    emitee.engineType = event.value.engineType;
    this.engineSelection.emit(emitee);
  }

}
