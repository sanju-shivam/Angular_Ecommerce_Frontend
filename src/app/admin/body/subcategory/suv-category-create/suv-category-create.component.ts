import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubCategoryServiceService } from '../../../SubCategory/sub-category-service.service';

@Component({
  selector: 'app-suv-category-create',
  templateUrl: './suv-category-create.component.html',
  styleUrls: ['./suv-category-create.component.css']
})
export class SuvCategoryCreateComponent implements OnInit {
  category;
  constructor( private SucategoryService : SubCategoryServiceService ) { }

  ngOnInit(): void {
    this.SucategoryService.getallCategory().subscribe( res =>{
      this.category = res;
      console.log(res);
    });
  }
  

  SubcategoryForm =new FormGroup({
    CategoryId:new FormControl(''),
    SubCategoryName:new FormControl(''),
 })

 collectData()
 {
   this.SucategoryService.savesubcategory(this.SubcategoryForm.value).subscribe( res =>{
      console.log(res);
    });
 }

}
