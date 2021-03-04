import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedUiComponent } from './advanced-ui.component';

describe('AdvancedUiComponent', () => {
  let component: AdvancedUiComponent;
  let fixture: ComponentFixture<AdvancedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
