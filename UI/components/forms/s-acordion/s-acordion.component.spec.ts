import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAcordionComponent } from './s-acordion.component';

describe('SAcordionComponent', () => {
  let component: SAcordionComponent;
  let fixture: ComponentFixture<SAcordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SAcordionComponent]
    });
    fixture = TestBed.createComponent(SAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
