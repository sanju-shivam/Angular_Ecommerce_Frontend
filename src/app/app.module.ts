import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { BodyComponent } from './admin/body/body.component';
import { AppRoutingModule } from './app-routing';
import { CategoryIndexComponent } from './admin/body/category/category-index/category-index.component';
import { CategoryCreateComponent } from './admin/body/category/category-create/category-create.component';
import { CategoryEditComponent } from './admin/body/category/category-edit/category-edit.component';
import { CategorybodyComponent } from './admin/body/category/categorybody/categorybody.component';
import { SuvCategoryBodyComponent } from './admin/body/subcategory/suv-category-body/suv-category-body.component';
import { SuvCategoryIndexComponent } from './admin/body/subcategory/suv-category-index/suv-category-index.component';
import { SuvCategoryCreateComponent } from './admin/body/subcategory/suv-category-create/suv-category-create.component';
import { SubCategoryEditComponent } from './admin/body/subcategory/sub-category-edit/sub-category-edit.component';


// FIREBASE
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from "@angular/fire/auth";



import { BrandcreateComponent } from './admin/body/brand/brandcreate/brandcreate.component';
import { BrandBodyComponent } from './admin/body/brand/brand-body/brand-body.component';
import { BrandEditComponent } from './admin/body/brand/brand-edit/brand-edit.component';
import { BrandIndexComponent } from './admin/body/brand/brand-index/brand-index.component';
import { ProductCreateComponent } from './admin/body/product/product-create/product-create.component';
import { ProductIndexComponent } from './admin/body/product/product-index/product-index.component';
import { ProductEditComponent } from './admin/body/product/product-edit/product-edit.component';
import { ProductBodyComponent } from './admin/body/product/product-body/product-body.component';
import { ProductViewSingleComponent } from './admin/body/product/product-view-single/product-view-single.component';
import { BannerBodyComponent } from './admin/body/banner/banner-body/banner-body.component';
import { BannerEditComponent } from './admin/body/banner/banner-edit/banner-edit.component';
import { BannerIndexComponent } from './admin/body/banner/banner-index/banner-index.component';
import { BannerCreateComponent } from './admin/body/banner/banner-create/banner-create.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CouponBodyComponent } from './admin/body/coupons/coupon-body/coupon-body.component';
import { CouponCreateComponent } from './admin/body/coupons/coupon-create/coupon-create.component';
import { CouponIndexComponent } from './admin/body/coupons/coupon-index/coupon-index.component';
import { CouponEditComponent } from './admin/body/coupons/coupon-edit/coupon-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CategoryIndexComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategorybodyComponent,
    SuvCategoryBodyComponent,
    SuvCategoryIndexComponent,
    SuvCategoryCreateComponent,
    SubCategoryEditComponent,
    BrandcreateComponent,
    BrandBodyComponent,
    BrandEditComponent,
    BrandIndexComponent,
    ProductCreateComponent,
    ProductIndexComponent,
    ProductEditComponent,
    ProductBodyComponent,
    ProductViewSingleComponent,
    BannerBodyComponent,
    BannerEditComponent,
    BannerIndexComponent,
    BannerCreateComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CouponBodyComponent,
    CouponCreateComponent,
    CouponIndexComponent,
    CouponEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Angular-ecommerce'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule // Only required for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
