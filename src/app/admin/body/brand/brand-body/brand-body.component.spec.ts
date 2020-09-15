import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBodyComponent } from './brand-body.component';

describe('BrandBodyComponent', () => {
  let component: BrandBodyComponent;
  let fixture: ComponentFixture<BrandBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
