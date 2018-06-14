import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CepRuleService {

  constructor(
    private http: HttpClient,
    @Inject('CepMiddlewareUrl') private hostUrl: string
  ) {}

  getRules(engineId:string) {
    return this.http.get(
      this.hostUrl +
      "/engines/" +
      encodeURIComponent(engineId) +
      "/rules"
    );
  }

}
