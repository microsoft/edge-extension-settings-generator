import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExtensionIdRule } from 'src/core/Rule/ExtensionIdRule';
import { GlobalRule } from 'src/core/Rule/GlobalRule';
import Rule from 'src/core/Rule/Rule';
import { UpdateUrlRule } from 'src/core/Rule/UpdateUrlRule';

@Component({
  selector: 'app-rule-selector',
  templateUrl: './rule-selector.component.html',
  styleUrls: ['./rule-selector.component.css'],
})
export class RuleSelectorComponent implements OnInit {
  selectBoxItems = [
    {
      value: 'global',
      displayName: 'All extensions (*)',
    },
    {
      value: 'extension_id',
      displayName: 'Extension ID',
    },
    {
      value: 'update_url',
      displayName: 'Update URL',
    },
  ];

  formGroup = new FormGroup({
    selectBox: new FormControl(''),
    updateUrlBox: new FormControl(
      'https://edge.microsoft.com/extensionwebstorebase/v1/crx',
      [Validators.required]
    ),
    extensionIdBox: new FormControl('', [
      Validators.required,
      Validators.minLength(32),
      Validators.maxLength(32),
    ]),
  });

  @Output() newRuleEvent = new EventEmitter<Rule>();

  constructor() {
    this.formGroup.get('selectBox').setValue(this.selectBoxItems[0].value);

    this.disableOptionalFields();

    this.formGroup.get('selectBox').valueChanges.subscribe((value) => {
      this.disableOptionalFields();
      this.enableVisibleFields();
    });
  }

  shouldShowUpdateUrlBox(): boolean {
    return this.formGroup.controls['selectBox'].value == 'update_url';
  }

  shouldShowExtensionIdBox(): boolean {
    return this.formGroup.controls['selectBox'].value == 'extension_id';
  }

  disableOptionalFields(): void {
    this.formGroup.get('extensionIdBox').disable();
    this.formGroup.get('updateUrlBox').disable();
  }

  enableVisibleFields(): void {
    if (this.shouldShowExtensionIdBox()) {
      this.formGroup.get('extensionIdBox').enable();
    }

    if (this.shouldShowUpdateUrlBox()) {
      this.formGroup.get('updateUrlBox').enable();
    }
  }

  createRule(): void {
    const selectedItem = this.formGroup.get('selectBox').value;
    let newRule: Rule;
    if (selectedItem === 'global') {
      newRule = new GlobalRule();
    }
    if (selectedItem === 'extension_id') {
      newRule = new ExtensionIdRule(this.formGroup.get('extension_id').value);
    }
    if (selectedItem === 'update_url') {
      newRule = new UpdateUrlRule(this.formGroup.get('update_url').value);
    }
    this.newRuleEvent.emit(newRule);
  }

  ngOnInit(): void {}
}
