import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBannerComponent } from './s-banner.component';

describe('SBannerComponent', () => {
  let component: SBannerComponent;
  let fixture: ComponentFixture<SBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SBannerComponent]
    });
    fixture = TestBed.createComponent(SBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
