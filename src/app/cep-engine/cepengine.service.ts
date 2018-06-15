import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CepEngineService {

  constructor (
    private http: HttpClient,
    @Inject('CepMiddlewareUrl') private hostUrl: string
  ) {}

  getEngines() {
    return this.http.get(this.hostUrl + "/engines");
  }

  getEngine(engineId: string) {
    return this.http.get(this.hostUrl + "/engines/" + encodeURIComponent(engineId));
  }

}
