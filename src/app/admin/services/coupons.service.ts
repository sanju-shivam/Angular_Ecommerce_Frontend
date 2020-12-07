import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  url = "http://127.0.0.1:8000/api/";

  datatrnsfr = new Subject();

  constructor(private http: HttpClient ) { }

  saveCoupon(data){
    return this.http.post(this.url+"coupons",data);
  }

  showAllCoupon(){
    return this.http.get(this.url+"coupons");
  }


  editCoupon(id){
  	return this.http.get(this.url+"coupons/"+id+"/edit");
  }

  
}
