import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SQuestionRenderComponent } from './s-question-render.component';

describe('SQuestionRenderComponent', () => {
  let component: SQuestionRenderComponent;
  let fixture: ComponentFixture<SQuestionRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SQuestionRenderComponent]
    });
    fixture = TestBed.createComponent(SQuestionRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
