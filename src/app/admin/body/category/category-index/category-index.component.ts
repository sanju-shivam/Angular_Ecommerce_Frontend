import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {
  data;
  
  constructor(
                private category: CategoryService,
                private ActiveRoute: ActivatedRoute,
                private Route: Router
              ) { }
 
  ngOnInit(): void {  
    this.category.getallCategory().subscribe( res => {
     this.data =  res;
    });
  }
  
  delete(id){
    const data = [ id];
    this.category.deleteCategory(data);
  }

  edit(id){
    const ids = [ id];
    this.Route.navigate(['../edit',id], {relativeTo: this.ActiveRoute});
  }

}