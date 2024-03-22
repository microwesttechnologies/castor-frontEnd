import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBlockableDivComponent } from './s-blockable-div.component';

describe('SBlockableDivComponent', () => {
  let component: SBlockableDivComponent;
  let fixture: ComponentFixture<SBlockableDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SBlockableDivComponent]
    });
    fixture = TestBed.createComponent(SBlockableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
