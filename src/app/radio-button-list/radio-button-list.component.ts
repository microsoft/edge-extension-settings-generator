import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-button-list',
  templateUrl: './radio-button-list.component.html',
  styleUrls: ['./radio-button-list.component.css'],
})
export class RadioButtonListComponent implements OnInit {
  @Input() title: string;
  @Input() items: string[];
  @Output() onSelectedItemChanged = new EventEmitter<string>();

  radioButton: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.radioButton = new FormControl(this.items[0]);
    this.radioButton.valueChanges.subscribe(this.onValueChanged.bind(this));
  }

  private onValueChanged(selectedValue) {
    this.onSelectedItemChanged.emit(selectedValue);
  }
}