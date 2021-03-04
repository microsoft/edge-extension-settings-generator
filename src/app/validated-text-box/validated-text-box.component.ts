import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
import Validator from 'src/core/KeyValuePair/Validators/Validator';

@Component({
  selector: 'app-validated-text-box',
  templateUrl: './validated-text-box.component.html',
  styleUrls: ['./validated-text-box.component.css'],
})
export class ValidatedTextBoxComponent implements OnInit {
  @Input() title: string;
  @Input() defaultValue: string;
  @Input() validator: Validator;
  @Output() onValueChange = new EventEmitter<string>();

  textBoxControl: FormControl;

  validatorWrapper(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!this.validator || !control.value) return null;
      return this.validator.validate(control.value)
        ? null
        : { validator: { value: control.value } };
    };
  }

  constructor() {}

  ngOnInit(): void {
    this.textBoxControl = new FormControl("", [
      this.validatorWrapper(),
    ]);
    this.textBoxControl.setValue(this.defaultValue);
    this.textBoxControl.valueChanges.subscribe(this.textBoxValueChanged.bind(this));
    if (this.defaultValue) this.onValueChange.emit(this.defaultValue);
  }

  textBoxValueChanged(value: string) {
    if (this.textBoxControl.valid) {
      this.onValueChange.emit(value);
    } else {
      this.onValueChange.emit("");
    }
  }
}
