import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFloorComponent } from './s-floor.component';

describe('SFloorComponent', () => {
  let component: SFloorComponent;
  let fixture: ComponentFixture<SFloorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SFloorComponent]
    });
    fixture = TestBed.createComponent(SFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
