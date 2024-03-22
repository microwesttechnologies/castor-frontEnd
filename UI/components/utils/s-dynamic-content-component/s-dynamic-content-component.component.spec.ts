import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDynamicContentComponentComponent } from './s-dynamic-content-component.component';

describe('SDynamicContentComponentComponent', () => {
  let component: SDynamicContentComponentComponent;
  let fixture: ComponentFixture<SDynamicContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SDynamicContentComponentComponent]
    });
    fixture = TestBed.createComponent(SDynamicContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
