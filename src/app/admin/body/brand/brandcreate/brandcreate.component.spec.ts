import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandcreateComponent } from './brandcreate.component';

describe('BrandcreateComponent', () => {
  let component: BrandcreateComponent;
  let fixture: ComponentFixture<BrandcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
