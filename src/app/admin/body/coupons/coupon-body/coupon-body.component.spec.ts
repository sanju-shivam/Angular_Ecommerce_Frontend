import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponBodyComponent } from './coupon-body.component';

describe('CouponBodyComponent', () => {
  let component: CouponBodyComponent;
  let fixture: ComponentFixture<CouponBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
