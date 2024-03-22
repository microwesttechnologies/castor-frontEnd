import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SConfirmDialogComponent } from './s-confirm-dialog.component';

describe('SConfirmDialogComponent', () => {
  let component: SConfirmDialogComponent;
  let fixture: ComponentFixture<SConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SConfirmDialogComponent]
    });
    fixture = TestBed.createComponent(SConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
