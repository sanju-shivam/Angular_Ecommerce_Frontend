import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../../../services/coupons.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-coupon-index',
  templateUrl: './coupon-index.component.html',
  styleUrls: ['./coupon-index.component.css']
})
export class CouponIndexComponent implements OnInit {
  datas;
  constructor(private CouponService: CouponsService, private Router: Router) { }

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(){
    this.CouponService.showAllCoupon().subscribe(res => {
      this.datas = res['data'];
    });
  }

  edit(id){
    this.Router.navigate(['admin','coupon','edit'], { queryParams : id });
  }
  
  delete(id){
    
  }
  

}
