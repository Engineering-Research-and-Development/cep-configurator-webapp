import { Component, OnInit, Input } from '@angular/core';
import { CepEngine } from './cep-engine';
import { CepEngineService } from './cepengine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cepengine',
  templateUrl: './cepengine.component.html',
  styleUrls: ['./cepengine.component.css']
})
export class CepEngineComponent implements OnInit {

  private selectedValue: any;
  private cepEngines: any;

  constructor(public service: CepEngineService) {}

  ngOnInit() {
    this.service.getEngines().subscribe(
      (engines) => {
        this.cepEngines = engines;
      }
    );
  }

  getSelectedEngine() {
    return this.selectedValue;
  }

}
