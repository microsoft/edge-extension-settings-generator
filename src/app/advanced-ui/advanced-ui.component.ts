import { Component, OnInit } from '@angular/core';
import { ChromeStoreUpdateUrl, EdgeStoreUpdateUrl } from 'src/core/constants';
import Rule from 'src/core/Rule/Rule';

@Component({
  selector: 'app-advanced-ui',
  templateUrl: './advanced-ui.component.html',
  styleUrls: ['./advanced-ui.component.css']
})
export class AdvancedUiComponent implements OnInit {

  edgeStoreUpdateUrl = EdgeStoreUpdateUrl;
  chromeStoreUpdateUrl = ChromeStoreUpdateUrl;

  ngOnInit(): void {
  }

  selectedRule: Rule = null;

  onRuleSelected(rule: Rule): void {
    this.selectedRule = rule;
  }

  deselectRule(): void {
    this.selectedRule = null;
  }

}
