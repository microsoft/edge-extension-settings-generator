import { Component, Input, OnInit } from '@angular/core';
import Rule from 'src/core/Rule/Rule';

@Component({
  selector: 'app-rule-editor',
  templateUrl: './rule-editor.component.html',
  styleUrls: ['./rule-editor.component.css'],
})
export class RuleEditorComponent implements OnInit {
  @Input() rule: Rule;

  constructor() {}

  ngOnInit(): void {
  }

  isGlobalRule(): boolean {
    return this.rule.getScope() === '*';
  }

  isUpdateUrlRule(): boolean {
    return this.rule.getScope().startsWith('update_url:');
  }

  isExtensionRule(): boolean {
    return !this.isGlobalRule() && !this.isUpdateUrlRule();
  }
}
