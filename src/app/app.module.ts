import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RuleSelectorComponent } from './rule-selector/rule-selector.component';
import { RuleEditorComponent } from './rule-editor/rule-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleSelectorComponent,
    RuleEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
