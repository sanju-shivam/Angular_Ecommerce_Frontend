import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvCategoryIndexComponent } from './suv-category-index.component';

describe('SuvCategoryIndexComponent', () => {
  let component: SuvCategoryIndexComponent;
  let fixture: ComponentFixture<SuvCategoryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvCategoryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvCategoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
