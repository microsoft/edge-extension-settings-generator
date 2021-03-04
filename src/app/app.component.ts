import { Component } from '@angular/core';
import Rule from 'src/core/Rule/Rule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  selectedRule: Rule = null;

  onRuleSelected(rule: Rule): void {
    this.selectedRule = rule;
  }
}
