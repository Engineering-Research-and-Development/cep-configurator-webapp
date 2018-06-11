import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CepEngineService {

  constructor(
    private http: HttpClient,
    private hostUrl: string
  ) {}

  getEngines () {
    return this.http.get(this.hostUrl + "/engines");
  }

}
