import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  a;
  data;
  constructor(
              private ActiveRoute: ActivatedRoute,
              private category: CategoryService,
              private Route: Router
              ) { }

  ngOnInit(): void {
  this.a = this.ActiveRoute.snapshot.paramMap.get('id');
  const data = [this.a];
    this.category.editCategory(data).subscribe((res) => {
      this.data = res['data'];
      console.log(this.data.name);   
        this.CategoryForm.patchValue({
          name : this.data.name,
          id: this.a
        });   
    });
  }


  CategoryForm =new FormGroup({
    name:new FormControl(''),
    id: new FormControl(),
  })

  UpdateData()
  {
    this.category.UpdateCategory(this.CategoryForm.value).subscribe((result)=>{
      console.log(result);
      if(result['status'] == 200){
        this.Route.navigate(['admin','category']);
      }
     });
  }




}
