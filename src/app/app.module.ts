import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

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
import { MinimalUiComponent } from './minimal-ui/minimal-ui.component';
import { HomeComponent } from './home/home.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

const routes: Routes = [
  { path: 'minimal', component: MinimalUiComponent },
  { path: 'advanced', component: AdvancedUiComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

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
    AdvancedUiComponent,
    MinimalUiComponent,
    HomeComponent,
    CollapsibleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
