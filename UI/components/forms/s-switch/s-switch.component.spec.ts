import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSwitchComponent } from './s-switch.component';

describe('SSwitchComponent', () => {
  let component: SSwitchComponent;
  let fixture: ComponentFixture<SSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SSwitchComponent]
    });
    fixture = TestBed.createComponent(SSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
