import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { AddRuleComponent } from './add-rule/add-rule.component';
import { EditRuleComponent } from './edit-rule/edit-rule.component';

const ROUTES: Routes = [
  {path: 'rules', component: RulesComponent},
  {path: '', redirectTo: '/rules', pathMatch: 'full'},
  {path: 'rule-details/:id', component: RuleDetailsComponent},
  {path: 'add-rule', component: AddRuleComponent},
  {path: 'edit-rule/:id', component: EditRuleComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
