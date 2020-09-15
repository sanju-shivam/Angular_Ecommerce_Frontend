import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewSingleComponent } from './product-view-single.component';

describe('ProductViewSingleComponent', () => {
  let component: ProductViewSingleComponent;
  let fixture: ComponentFixture<ProductViewSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
