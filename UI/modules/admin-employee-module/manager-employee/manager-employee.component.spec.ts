import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEmployeeComponent } from './manager-employee.component';

describe('ManagerEmployeeComponent', () => {
  let component: ManagerEmployeeComponent;
  let fixture: ComponentFixture<ManagerEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerEmployeeComponent]
    });
    fixture = TestBed.createComponent(ManagerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
