import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class RuleService {
  constructor(private http: Http, private route: ActivatedRoute) {}

  getEngines(): any {

      const token = this.route.snapshot.paramMap.get('access_token');
      const header = new Headers({ 'x-auth-token': `${token}` });

    // tslint:disable-next-line:prefer-const
    let opts = new RequestOptions();
    opts.headers = header;

    return this.http
    .get('http://localhost:8091/engines', opts)
    .map(res => res.json());
  }


  getEngine(id: string): any {
    return this.http.get(`http://localhost:8091/engines/${id}`).map(res => res.json());
  }


  getRules(id: string): any {
    //  console.log(id + ' u servisu');
    const url = `http://localhost:8091/engines/${id}/rules`;

    return this.http.get(url).map(res => res.json());
    // .get(`http://localhost:8091/engines${id}`)
  }


  getRuleDetails(idEngine: string, idRule: string) {
    const url = `http://localhost:8091/engines/${idEngine}/rules/${idRule}`;
    return this.http.get(url).map(rule => rule.json());
  }


  getEngineDetails(id: string) {
    const url = `http://localhost:8091/engines/${id}`;
    return this.http.get(url).map(res => res.json());
  }


  getEngineRules(id: string) {
    const url = `http://localhost:8091/engines/${id}/rules`;
    return this.http.get(url).map(res => res.json());
  }


  addRule(id, data) {
    const url = `http://localhost:8091/engines/${id}/rules`;

    const header = new Headers({ 'Content-Type': 'application/json' });

    // tslint:disable-next-line:prefer-const
    let opts = new RequestOptions();
    opts.headers = header;

    this.http.post(url, data, opts).subscribe();
  }


  updateRule(engineId, data) {
    // const engineId = this.route.snapshot.paramMap.get('engineId');
    const url = `http://localhost:8091/engines/${engineId}/rules/${data.id}`;

      this.http.put(url, data).subscribe(res => { if (res.status === 200) {
       console.log('Rule changed.');
       } else {
        console.log('Change failed.');
       }
    });
    }


  deleteRule(id: string) {
      // return this.http.delete(url);
    //   return this.http.delete(`http://localhost:8091/engines/${id}`); // .subscribe(res => console.log('pravilo sa ID '+id+' obrisano'));
  }


  addEngine(data) {
    const url = 'http://localhost:8091/engines';

    this.http.post(url, data).subscribe(res => { if (res.status === 200) {
        console.log('suxes', data.engineId);
       } else {
        console.log('fail');
       }
    });
  }

  updateEngine(data) {
    const url = `http://localhost:8091/engines/${data.engineId}`;

    this.http.put(url, data).subscribe(res => { if (res.status === 200) {
      console.log('suxes');
     } else {
      console.log('fail');
     }
    });
  }

  deleteEngine(id, keepRule) {
    const url = `http://localhost:8091/engines/${id}?cascade=${keepRule}`;
    this.http.delete(url).subscribe();
  }


  getEventTypes(engineId) {
    const URL = `http://localhost:8091/engines/${engineId}/event-types`;

    return this.http.get(URL).map(res => res.json());
  }

  getArchiveRules() {
    const URL = 'http://localhost:8091/archived-rules';

    return this.http.get(URL).map(res => res.json());
  }
}
