import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STextareaComponent } from './s-textarea.component';

describe('STextareaComponent', () => {
  let component: STextareaComponent;
  let fixture: ComponentFixture<STextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [STextareaComponent]
    });
    fixture = TestBed.createComponent(STextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
