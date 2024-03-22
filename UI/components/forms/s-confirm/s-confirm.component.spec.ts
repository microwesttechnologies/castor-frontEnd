import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SConfirmComponent } from './s-confirm.component';

describe('SConfirmComponent', () => {
  let component: SConfirmComponent;
  let fixture: ComponentFixture<SConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SConfirmComponent]
    });
    fixture = TestBed.createComponent(SConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
