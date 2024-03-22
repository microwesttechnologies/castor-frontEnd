import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCalenderComponent } from './s-calender.component';

describe('SCalenderComponent', () => {
  let component: SCalenderComponent;
  let fixture: ComponentFixture<SCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCalenderComponent]
    });
    fixture = TestBed.createComponent(SCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
