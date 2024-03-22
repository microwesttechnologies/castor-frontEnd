import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDividerComponent } from './s-divider.component';

describe('SDividerComponent', () => {
  let component: SDividerComponent;
  let fixture: ComponentFixture<SDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDividerComponent]
    });
    fixture = TestBed.createComponent(SDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
