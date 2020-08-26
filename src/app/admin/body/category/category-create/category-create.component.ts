import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor ( private category: CategoryService ) { }

  ngOnInit(): void {
  }

  CategoryForm =new FormGroup({
    name:new FormControl('')
 })

 collectData()
 {
   this.category.saveCategory(this.CategoryForm.value).subscribe((result)=>{
      if(result['status'] == 200){
        this.CategoryForm.reset({})
      }
    });
 }

}
