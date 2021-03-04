import { Component, OnInit } from '@angular/core';
import Rule from 'src/core/Rule/Rule';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {

  constructor(private ruleService: RuleService) { }

  ngOnInit(): void {
  }

  getRules(): Rule[] {
    return this.ruleService.getRules();
  }

  removeRule(scope: string): void {
    this.ruleService.removeRule(scope);
  }

}
