import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCheckboxComponent } from './s-checkbox.component';

describe('SCheckboxComponent', () => {
  let component: SCheckboxComponent;
  let fixture: ComponentFixture<SCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCheckboxComponent]
    });
    fixture = TestBed.createComponent(SCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
