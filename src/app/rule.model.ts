export class Rule {
    id: string;
    description: string;
    statement: string;
}

// import { Injectable } from '@angular/core';
// import { RuleService } from './rule.service';

// @Injectable()
// export class Rule {
//   rules = [];

//   constructor(private ruleService: RuleService) {
//     this.initializerules();
//   }

//   initializerules() {
//     this.ruleService.getRules().subscribe(rules => {
//       this.rules = rules;
//     });
//   }
// }
