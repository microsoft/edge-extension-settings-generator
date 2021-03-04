import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSelectorComponent } from './rule-selector.component';

describe('RuleSelectorComponent', () => {
  let component: RuleSelectorComponent;
  let fixture: ComponentFixture<RuleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
