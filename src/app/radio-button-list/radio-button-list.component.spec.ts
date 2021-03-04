import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonListComponent } from './radio-button-list.component';

describe('RadioButtonListComponent', () => {
  let component: RadioButtonListComponent;
  let fixture: ComponentFixture<RadioButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
