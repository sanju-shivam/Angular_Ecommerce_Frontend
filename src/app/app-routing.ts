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
import { BrandBodyComponent } from './admin/body/brand/brand-body/brand-body.component';
import { BrandIndexComponent } from './admin/body/brand/brand-index/brand-index.component';
import { BrandcreateComponent } from './admin/body/brand/brandcreate/brandcreate.component';
import { BrandEditComponent } from './admin/body/brand/brand-edit/brand-edit.component';
import { ProductBodyComponent } from './admin/body/product/product-body/product-body.component';
import { ProductIndexComponent } from './admin/body/product/product-index/product-index.component';
import { ProductCreateComponent } from './admin/body/product/product-create/product-create.component';
import { ProductEditComponent } from './admin/body/product/product-edit/product-edit.component';
import { ProductViewSingleComponent } from './admin/body/product/product-view-single/product-view-single.component';
import { BannerBodyComponent } from './admin/body/banner/banner-body/banner-body.component';
import { BannerIndexComponent } from './admin/body/banner/banner-index/banner-index.component';
import { BannerCreateComponent } from './admin/body/banner/banner-create/banner-create.component';
import { BannerEditComponent } from './admin/body/banner/banner-edit/banner-edit.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CouponCreateComponent } from './admin/body/coupons/coupon-create/coupon-create.component';
import { CouponBodyComponent } from './admin/body/coupons/coupon-body/coupon-body.component';
import { CouponIndexComponent } from './admin/body/coupons/coupon-index/coupon-index.component';
import { CouponEditComponent } from './admin/body/coupons/coupon-edit/coupon-edit.component';

const route: Routes = [
  {path: 'admin' , component: BodyComponent ,canActivate : [AdminGuard] ,children: [
      {path: 'category' , component: CategorybodyComponent , children: [
          {path: '', component: CategoryIndexComponent},
          {path: 'create', component: CategoryCreateComponent},
          {path: 'edit/:id', component: CategoryEditComponent},
      ]},
      {path: 'subcategory' , component: SuvCategoryBodyComponent, children: [
          {path: '', component: SuvCategoryIndexComponent},
          {path: 'create', component: SuvCategoryCreateComponent},
          {path: 'edit/:id', component: SubCategoryEditComponent},
      ]},
      {path: 'brand' , component: BrandBodyComponent , children: [
          {path: '', component: BrandIndexComponent},
          {path: 'create', component: BrandcreateComponent},
          {path: 'edit/:id', component: BrandEditComponent},
      ]},
      {path: 'product' , component: ProductBodyComponent , children: [
        {path: '', component: ProductIndexComponent},
        {path: 'create', component: ProductCreateComponent},
        {path: 'edit', component: ProductEditComponent},
        {path: 'view', component: ProductViewSingleComponent},
    ]},
    {path: 'banner' , component: BannerBodyComponent , children: [
        {path: '', component: BannerIndexComponent},
        {path: 'create', component: BannerCreateComponent},
        {path: 'edit', component: BannerEditComponent},
    ]},
    {path : 'coupon', component : CouponBodyComponent, children: [
        {path: '' , component: CouponIndexComponent},
        {path: 'create' , component: CouponCreateComponent},
        {path: 'edit' , component: CouponEditComponent},
    ]},
  ]},
  
  {path: 'admin/login',component: LoginComponent },
  {path : 'admin/forget-password', component: ForgetPasswordComponent},
  {path: 'admin/reset-password',component:ResetPasswordComponent}
];
  
  @NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  