import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedTextBoxComponent } from './validated-text-box.component';

describe('ValidatedTextBoxComponent', () => {
  let component: ValidatedTextBoxComponent;
  let fixture: ComponentFixture<ValidatedTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
