import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import Validator from 'src/core/KeyValuePair/Validators/Validator';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() title: string;
  @Input() placeholder: string;
  @Input() validator: Validator;
  @Output() onListChanged = new EventEmitter<string[]>();

  validatorWrapper(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!this.validator) return null;
      return this.validator.validate(control.value)
        ? null
        : { validator: { value: control.value } };
    };
  }

  listItems: string[] = [];
  inputField = new FormControl('', [this.validatorWrapper()]);

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.listItems.push(this.inputField.value);
    this.onListChanged.emit(this.listItems);
    this.inputField.setValue('');
  }

  removeItem(index: number) {
    this.listItems.splice(index, 1);
  }
}
