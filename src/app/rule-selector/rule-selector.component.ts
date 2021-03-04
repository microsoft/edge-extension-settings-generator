import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  selectedValue = null;

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

  ngOnInit(): void {}
}
