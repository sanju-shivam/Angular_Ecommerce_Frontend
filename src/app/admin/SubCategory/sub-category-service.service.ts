import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryServiceService {

  constructor(private htttpClient : HttpClient) { }

  getallCategory(){
    return  this.htttpClient.get('http://127.0.0.1:8000/api/category/getallCategoryforsubcategories');
  }

  savesubcategory(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/savesubcategories',data);
  }

  showSubcategories(){
    return  this.htttpClient.get('http://127.0.0.1:8000/api/subcategory/show');
  }

  editSubcategories(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/subcategory/edit',data);
  }

  deleteSubCategory(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/subcategory/delete',data);
  }

  UpdateCategory(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/subcategory/update',data);
  }

  
}
