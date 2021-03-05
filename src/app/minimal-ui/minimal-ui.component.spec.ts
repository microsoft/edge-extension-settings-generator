import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalUiComponent } from './minimal-ui.component';

describe('MinimalUiComponent', () => {
  let component: MinimalUiComponent;
  let fixture: ComponentFixture<MinimalUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
