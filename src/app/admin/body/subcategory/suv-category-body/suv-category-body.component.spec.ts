import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvCategoryBodyComponent } from './suv-category-body.component';

describe('SuvCategoryBodyComponent', () => {
  let component: SuvCategoryBodyComponent;
  let fixture: ComponentFixture<SuvCategoryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuvCategoryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuvCategoryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
