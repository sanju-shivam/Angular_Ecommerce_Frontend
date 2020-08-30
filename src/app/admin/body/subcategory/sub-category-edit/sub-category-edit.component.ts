import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryServiceService } from '../../../SubCategory/sub-category-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sub-category-edit',
  templateUrl: './sub-category-edit.component.html',
  styleUrls: ['./sub-category-edit.component.css']
})
export class SubCategoryEditComponent implements OnInit {
  a;data;category;
  constructor(
                private ActiveRoute: ActivatedRoute,
                private SucategoryService : SubCategoryServiceService,
                private Route: Router
              ) { }

  ngOnInit(): void {
    this.SucategoryService.getallCategory().subscribe( res =>{
      this.category = res;
      console.log(res);
    });

  this.a = this.ActiveRoute.snapshot.paramMap.get('id');
  const data = [this.a];
  this.SucategoryService.editSubcategories(data).subscribe((res) => {
      this.data = res['data'];
        this.SubcategoryForm.patchValue({
          SubCategoryName : this.data.subcategory,
          CategoryId: this.data.category_id,
          id: this.a
        });   
    });
  }
  
  SubcategoryForm =new FormGroup({
    CategoryId:new FormControl(''),
    SubCategoryName:new FormControl(''),
    id: new FormControl(),
 })

 UpdateData()
  {
    this.SucategoryService.UpdateCategory(this.SubcategoryForm.value).subscribe((result)=>{
      console.log(result);
      if(result['status'] == 200){
        this.Route.navigate(['admin' , 'subcategory']);
      }
     });
  }

}
