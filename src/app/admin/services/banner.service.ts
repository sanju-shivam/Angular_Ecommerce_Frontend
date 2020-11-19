import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  urls="http://127.0.0.1:8000/api/banner";

  constructor(private htttpClient : HttpClient) { }

  saveBanner(data){
    return this.htttpClient.post(this.urls+'/save',data);
  }
  
}
