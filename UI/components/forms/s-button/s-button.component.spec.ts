import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SButtonComponent } from './s-button.component';

describe('SButtonComponent', () => {
  let component: SButtonComponent;
  let fixture: ComponentFixture<SButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SButtonComponent]
    });
    fixture = TestBed.createComponent(SButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
