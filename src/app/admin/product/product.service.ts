import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

   productData  = new Subject();

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

  editSingleProduct(id) : Observable<any> {
    return this.httpClient.post<any>(this.url+'/editProduct',id);
  }

  getAllSingleProductImagesForEdit(id){
    return this.httpClient.post<any>(this.url+'/editSingleProductImage',id);
  }

  deleteSingleProductImage(id){
    return this.httpClient.post(this.url+'/deleteSingleProductImage',id);
  }

  update(data){
    return this.httpClient.post(this.url+'/update',data);
  }

}


// YES I HAVE EXPERIENCE IN LARAVEL.

// PHARMA 
// http://sample.pharmabazaar.co/

// STUDENT PORTAL 
// https://github.com/sanju-shivam/studentportal.git

// BASIC OF ECOMMERCE
// https://github.com/sanju-shivam/ecommerce.git

// SAVE THE CHILD 
// http://savethechild.cf/