import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  urls="http://127.0.0.1:8000/api/category/show";

  constructor(private htttpClient : HttpClient ) { }
  
  getallCategory(){
    return  this.htttpClient.get(this.urls);
  }

  saveCategory(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/category/create',data);
  }

  deleteCategory(id){
    return this.htttpClient.post('http://127.0.0.1:8000/api/category/delete',id).subscribe( res => {
      console.log(res);
     });
  }

  editCategory(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/category/edit',data);
  }

  UpdateCategory(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/category/update',data);
  }
}