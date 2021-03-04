import { Injectable } from '@angular/core';
import Rule from 'src/core/Rule/Rule';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  private rules: Rule[] = [];

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  removeRule(scopeToRemove: string): void {
    this.rules = this.rules.filter((rule) => rule.getScope() != scopeToRemove);
  }

  replaceRule(rule: Rule): void {
    this.removeRule(rule.getScope());
    this.addRule(rule);
  }

  getRules(): Rule[] {
    return this.rules;
  }

  jsonify(): string {
    let settings = {};

    this.rules.forEach(rule => {
      let scope = rule.getScope();
      settings[scope] = {};

      rule.getKeyValuePairs().forEach(pair => {
        let key = pair.getKey();
        let val = pair.getValue();
        settings[scope][key] = val;
      });
    });

    return JSON.stringify(settings);
  }
}
