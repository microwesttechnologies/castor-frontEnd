import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STextboxComponent } from './s-textbox.component';

describe('STextboxComponent', () => {
  let component: STextboxComponent;
  let fixture: ComponentFixture<STextboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [STextboxComponent]
    });
    fixture = TestBed.createComponent(STextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
