import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SToastComponent } from './s-toast.component';

describe('SToastComponent', () => {
  let component: SToastComponent;
  let fixture: ComponentFixture<SToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SToastComponent]
    });
    fixture = TestBed.createComponent(SToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
