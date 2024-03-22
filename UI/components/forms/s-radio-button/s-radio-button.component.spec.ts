import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRadioButtonComponent } from './s-radio-button.component';

describe('SRadioButtonComponent', () => {
  let component: SRadioButtonComponent;
  let fixture: ComponentFixture<SRadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SRadioButtonComponent]
    });
    fixture = TestBed.createComponent(SRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
