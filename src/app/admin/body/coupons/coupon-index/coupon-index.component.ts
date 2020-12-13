import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../../../services/coupons.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coupon-index',
  templateUrl: './coupon-index.component.html',
  styleUrls: ['./coupon-index.component.css']
})
export class CouponIndexComponent implements OnInit {
  datas;
  constructor(private CouponService: CouponsService, private Router: Router, private Active: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(){
    this.CouponService.showAllCoupon().subscribe(res => {
      this.datas = res['data'];
    });
  }

  edit(id){
    const ids = id;
    this.Router.navigate(['edit/',ids], { relativeTo: this.Active });
  }
  
  delete(id){
    this.datas = this.datas.filter(el => el.id != id);
    console.log(this.datas);
    this.CouponService.deleteCoupon(id).subscribe(res => {
      if(res == 1){
        console.log('deleted');
      }
      else{
        console.log(' not deleted');
      }
    });
  }
  

}
