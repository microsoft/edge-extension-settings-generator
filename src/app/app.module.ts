import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RuleSelectorComponent } from './rule-selector/rule-selector.component';
import { RuleEditorComponent } from './rule-editor/rule-editor.component';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';
import { RadioButtonListComponent } from './radio-button-list/radio-button-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ValidatedTextBoxComponent } from './validated-text-box/validated-text-box.component';
import { RuleListComponent } from './rule-list/rule-list.component';
import { AdvancedUiComponent } from './advanced-ui/advanced-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleSelectorComponent,
    RuleEditorComponent,
    CheckboxListComponent,
    RadioButtonListComponent,
    ItemListComponent,
    ValidatedTextBoxComponent,
    RuleListComponent,
    AdvancedUiComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
