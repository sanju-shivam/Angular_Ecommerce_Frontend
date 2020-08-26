import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
