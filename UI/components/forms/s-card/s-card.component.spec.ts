import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCardComponent } from './s-card.component';

describe('SCardComponent', () => {
  let component: SCardComponent;
  let fixture: ComponentFixture<SCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCardComponent]
    });
    fixture = TestBed.createComponent(SCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
