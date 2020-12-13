import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponsService } from '../../../services/coupons.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.css'],
  providers : [DatePipe]
})
export class CouponEditComponent implements OnInit {
  constructor(
              private ActiveRoute: ActivatedRoute, 
              private CouponService : CouponsService, 
              private datePipe: DatePipe,
              private Router : Router
            ) { }

  m;
  d;
  y;
  mindate = null;
  firstpickstartdate = true;
  todaydate;
  id;

  CouponForm = new FormGroup({
    name : new FormControl('',Validators.required),
    StartDate : new FormControl('',Validators.required),
    ExpiryDate : new FormControl('',Validators.required),
    minimun_discount_amount : new FormControl('',Validators.required),
    discount_percent : new FormControl('',Validators.required),
  })


  ngOnInit(){
    // alert(this.datePipe.transform(this.todaydate, 'yyyy/MM/dd'));
    
    this.id =  this.ActiveRoute.snapshot.paramMap.get('id')
    this.CouponService.editCoupon(this.id).subscribe(res => {
      this.CouponForm.patchValue({
        name : res['name'],
        StartDate : res['start_date'],
        ExpiryDate : res['expiry_date'],
        minimun_discount_amount : res['minimun_discount_amount'],
        discount_percent : res['discount_percent'],
      });
    });
  }



  
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


  start(){
    this.todaydate = Date.now();
    this.todaydate = this.datePipe.transform(this.todaydate, 'yyyy-MM-dd');
  }


  checkforstartpick(){
    if(this.mindate != null){
      this.firstpickstartdate = false;
    }else{
      this.firstpickstartdate = true;
    }
  }


  onsubmit(){
    this.CouponService.updateCoupon(this.CouponForm.value,this.id).subscribe(res => {
      if(res == 1){
        this.Router.navigate(['admin','coupon']);
      }
    });
  }

}
