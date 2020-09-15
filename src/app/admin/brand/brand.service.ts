import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private htttpClient: HttpClient) { }
  urls="http://127.0.0.1:8000/api/brand/show";

  getallBrand(){
    return  this.htttpClient.get(this.urls);
  }

  saveBrand(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/brand/create',data);
  }

  deleteBrand(id){
    return this.htttpClient.post('http://127.0.0.1:8000/api/brand/delete',id);
  }

  editBrand(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/brand/edit',data);
  }

  UpdateBrand(data){
    return this.htttpClient.post('http://127.0.0.1:8000/api/brand/update',data);
  }
}
