import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSuportComponent } from './s-tooltip.component';

describe('STooltipComponent', () => {
  let component: SSuportComponent;
  let fixture: ComponentFixture<SSuportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SSuportComponent]
    });
    fixture = TestBed.createComponent(SSuportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
