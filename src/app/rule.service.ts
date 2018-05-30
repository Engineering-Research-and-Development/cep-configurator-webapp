import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RuleService {

  constructor(private http: Http) {}

  getRules(): any {
        return this.http.get("http://localhost:3000/rules")
        .map(res => res.json());
    }

  getRule(id: number): any{
    // console.log(id);
    return this.http.get(`http://localhost:3000/rules/${id}`)
        .map(res => res.json());
      
  }

  deleteRule(id: number){
    return this.http.delete(`http://localhost:3000/rules/${id}`);//.subscribe(res => console.log('pravilo sa ID '+id+' obrisano'));
    
  }

  
} 
 