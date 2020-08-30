import { Component, OnInit } from '@angular/core';
import { SubCategoryServiceService } from '../../../SubCategory/sub-category-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suv-category-index',
  templateUrl: './suv-category-index.component.html',
  styleUrls: ['./suv-category-index.component.css']
})
export class SuvCategoryIndexComponent implements OnInit {
  datas;
  constructor(
                private SucategoryService : SubCategoryServiceService,
                private ActiveRoute: ActivatedRoute,
                private Route: Router
              ) { }

  ngOnInit(): void {
    this.SucategoryService.showSubcategories().subscribe(res => {
      this.datas = res;
    });
  }

  delete(id){
    const data = [ id];
    this.SucategoryService.deleteSubCategory(data);
  }

  edit(id){
    const ids = [ id];
    this.Route.navigate(['../edit',id], {relativeTo: this.ActiveRoute});
  }

}
