import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://127.0.0.1:8000/api/product";
  constructor(
              private httpClient : HttpClient
              ) { }
              
  getallbrandcatsubcat(){
    return this.httpClient.get('http://127.0.0.1:8000/api/product/gtallbrandcatsubcat');
  }

  saveProduct(data){
    return this.httpClient.post(this.url+'/save',data)
  }

  showProduct(){
    return this.httpClient.get(this.url+'/show');
  }

  deleteProduct(id){
    return this.httpClient.post(this.url+'/delete',id);
  }

  addImage(data){
    return this.httpClient.post(this.url+'/addImage',data);
  }

  showSingleProduct(id){
    return this.httpClient.post(this.url+'/singelProduct',id);
  }
}
