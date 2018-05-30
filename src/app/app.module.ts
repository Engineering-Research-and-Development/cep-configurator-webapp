import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from "@angular/http";
import { HttpModule } from "@angular/http"; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { EditRuleComponent } from './edit-rule/edit-rule.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { RuleService } from './rule.service';
import { AppRoutingModule } from './app-routing.module';
import { RulesComponent } from './rules/rules.component';
import { Rule } from './rule.model';


@NgModule({
  declarations: [
    AppComponent,
    AddRuleComponent,
    EditRuleComponent,
    RuleDetailsComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    

  ],
  providers: [RuleService, Rule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
