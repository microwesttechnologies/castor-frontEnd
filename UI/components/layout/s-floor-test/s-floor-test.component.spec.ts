import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFloorTestComponent } from './s-floor-test.component';

describe('SFloorTestComponent', () => {
  let component: SFloorTestComponent;
  let fixture: ComponentFixture<SFloorTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SFloorTestComponent]
    });
    fixture = TestBed.createComponent(SFloorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
