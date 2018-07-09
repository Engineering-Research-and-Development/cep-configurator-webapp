import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { EditRuleComponent } from './edit-rule/edit-rule.component';
import { EnginesComponent } from './engines/engines.component';
import { EngineDetailsComponent } from './engine-details/engine-details.component';
import { AddEngineComponent } from './add-engine/add-engine.component';

const ROUTES: Routes = [
  {path: 'engines', component: EnginesComponent},
  {path: '', redirectTo: '/engines', pathMatch: 'full'},
  {path: 'engines/:engineId', component: EngineDetailsComponent},
  {path: 'engines/:engineId/rules', component: RulesComponent},
  {path: 'engines/:engineId/rules/:ruleId', component: RuleDetailsComponent},
  {path: 'add-rule', component: AddRuleComponent},
  {path: 'edit-rule/:id', component: EditRuleComponent},
  {path: 'add-engine', component: AddEngineComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
