import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBodyComponent } from './banner-body.component';

describe('BannerBodyComponent', () => {
  let component: BannerBodyComponent;
  let fixture: ComponentFixture<BannerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
