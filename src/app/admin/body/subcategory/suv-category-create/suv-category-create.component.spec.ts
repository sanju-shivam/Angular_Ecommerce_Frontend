import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvCategoryCreateComponent } from './suv-category-create.component';

describe('SuvCategoryCreateComponent', () => {
  let component: SuvCategoryCreateComponent;
  let fixture: ComponentFixture<SuvCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
