import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BodyComponent } from './admin/body/body.component';
import { CategoryIndexComponent } from './admin/body/category/category-index/category-index.component';
import { CategoryCreateComponent } from './admin/body/category/category-create/category-create.component';
import { CategoryEditComponent } from './admin/body/category/category-edit/category-edit.component';
import { CategorybodyComponent } from './admin/body/category/categorybody/categorybody.component';
import { SuvCategoryBodyComponent } from './admin/body/subcategory/suv-category-body/suv-category-body.component';
import { SuvCategoryIndexComponent } from './admin/body/subcategory/suv-category-index/suv-category-index.component';
import { SuvCategoryCreateComponent } from './admin/body/subcategory/suv-category-create/suv-category-create.component';
import { SubCategoryEditComponent } from './admin/body/subcategory/sub-category-edit/sub-category-edit.component';

const route: Routes = [
  {path: 'admin' , component: BodyComponent , children: [
      {path: 'category' , component: CategorybodyComponent , children: [
          {path: '', component: CategoryIndexComponent},
          {path: 'create', component: CategoryCreateComponent},
          {path: 'edit', component: CategoryEditComponent},
      ]},
      {path: 'subcategory' , component: SuvCategoryBodyComponent, children: [
          {path: '', component: SuvCategoryIndexComponent},
          {path: 'create', component: SuvCategoryCreateComponent},
          {path: 'edit', component: SubCategoryEditComponent},
      ]},
  ]}  
];
  
  @NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  