import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CouponsService } from '../../../services/coupons.service';
import {formatDate} from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent implements OnInit {
  m;
  d;
  y;
  mindate = null;
  firstpickstartdate = true;



  constructor(private CouponService : CouponsService) {}

  ngOnInit(){
  }

  CouponForm = new FormGroup({
    name : new FormControl('',Validators.required),
    StartDate : new FormControl('',Validators.required),
    ExpiryDate : new FormControl('',Validators.required),
    minimun_discount_amount : new FormControl('',Validators.required),
    discount_percent : new FormControl('',Validators.required),
  })


  startpick(event){
    var a = event.target.value;
    var res = a.split("-");
    let m = parseInt(res[1]);
    let d = parseInt(res[2]);
    let y = parseInt(res[0]);
    if(m < 10)
        this.m = '0' + m.toString();
    if(d< 10)
      this.d = '0' + d.toString();
    // alert(this.d);
    if(d< 10){
      this.mindate =  y+'-'+m+'-'+'0'+d;
    }else{
    this.mindate =  y+'-'+m+'-'+d;
    }
    this.firstpickstartdate = false;
  }

  checkforstartpick(){
    if(this.mindate != null){
      this.firstpickstartdate = false;
    }else{
      this.firstpickstartdate = true;
    }
  }

  onsubmit(){
    this.CouponService.saveCoupon(this.CouponForm.value).subscribe(res => {
      // console.log(res);
      if(res['status'] == 200){
        this.CouponForm.reset();
      }
    })
  }

}
