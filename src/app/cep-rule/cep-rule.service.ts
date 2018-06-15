import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CepRuleService {

  constructor(
    private http: HttpClient,
    @Inject('CepMiddlewareUrl') private hostUrl: string
  ) {}

  getRules(engineId: string) {
    return this.http.get(
      this.hostUrl +
      "/engines/" +
      encodeURIComponent(engineId) +
      "/rules"
    );
  }

  getRule(engineId: string, ruleId: string) {
    return this.http.get(
      this.hostUrl +
      "/engines/" +
      encodeURIComponent(engineId) +
      "/rules/" +
      encodeURIComponent(ruleId)
    );
  }

  createRule(engineId: string, rule: any) {
    return this.http.post(
      this.hostUrl + "/engines/" + encodeURIComponent(engineId) + "/rules",
      rule
    )
  }

  deleteRule(engineId: string, ruleId: string) {
    return this.http.delete(
      this.hostUrl +
      "/engines/" +
      encodeURIComponent(engineId) +
      "/rules/" +
      encodeURIComponent(ruleId)
    );
  }

  updateRule(engineId: string, ruleId: string, rule: any) {
    return this.http.put(
      this.hostUrl +
      "/engines/" +
      encodeURIComponent(engineId) +
      "/rules/" +
      encodeURIComponent(ruleId),
      rule
    )
  }

}
