import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.css'],
})
export class CheckboxListComponent implements OnInit {
  @Input() title: string;
  @Input() description: string = "";
  @Input() items: string[];
  @Output() onSelectedItemsChanged = new EventEmitter<string[]>();

  checkboxes: FormArray;

  constructor() {}

  ngOnInit(): void {
    this.initializeCheckBoxes();
    this.checkboxes.valueChanges.subscribe(this.onValueChanged.bind(this));
  }

  initializeCheckBoxes(): void {
    this.checkboxes = new FormArray([]);
    for (let i = 0; i < this.items.length; i++) {
      this.checkboxes.push(new FormControl(false));
    }
  }

  onValueChanged(newValues): void {
    let checkedItems = this.getCheckedItems(newValues);
    this.onSelectedItemsChanged.emit(checkedItems);
  }

  getCheckedItems(newValues: any): string[] {
    let checkedItems: string[] = [];
    newValues.forEach((isChecked, index) => {
      if (isChecked) {
        checkedItems.push(this.items[index]);
      }
    });
    return checkedItems;
  }

  selectAll(): void {
    this.checkboxes.controls.forEach((control) => control.setValue(true));
  }

  deselectAll(): void {
    this.checkboxes.controls.forEach((control) => control.setValue(false));
  }
}
