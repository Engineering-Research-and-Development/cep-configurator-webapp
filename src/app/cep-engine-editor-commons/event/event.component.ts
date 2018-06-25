import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cep-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  cepEvent;
  @Input() engineId;
  @Output() sendResult = new EventEmitter();

  constructor(
    private http: HttpClient,
    @Inject('CepMiddlewareUrl') private hostUrl: string
  ) { }

  ngOnInit() {
  }

  sendEvent() {
    var subscription: Subscription = this.http
      .post(
        this.hostUrl + '/engines/' + this.engineId + '/events',
        JSON.parse(this.cepEvent),
      )
      .subscribe(
        () => { this.sendResult.emit(true); },
        () => { this.sendResult.emit(false); },
        () => { subscription.unsubscribe(); }
      );
  }

}
