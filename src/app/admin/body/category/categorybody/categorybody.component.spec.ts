import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorybodyComponent } from './categorybody.component';

describe('CategorybodyComponent', () => {
  let component: CategorybodyComponent;
  let fixture: ComponentFixture<CategorybodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorybodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorybodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
