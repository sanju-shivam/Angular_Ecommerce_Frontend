import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-view-single',
  templateUrl: './product-view-single.component.html',
  styleUrls: ['./product-view-single.component.css']
})
export class ProductViewSingleComponent implements OnInit {
  productDetails;
  productImages;
  category;
  subcategory;
  brand;
  DATATOTRANSFER;

  
  constructor(
              private product: ProductService,
              private route : ActivatedRoute,
              private Router: Router
            ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams;
     console.log(id['id']);
    this.product.showSingleProduct(id).subscribe(res =>{
      //console.log(res);
      this.DATATOTRANSFER = res;
      this.productDetails = res['product'];
      this.category = res['category'];
      this.subcategory = res['subcategory'];
      this.brand = res['brand'];
      //console.log(this.productDetails);
      this.productImages = res['images'];
    })
  }


  edit(){
    this.Router.navigate(['admin','product','edit'],{queryParams: this.route.snapshot.queryParams});
  }
  
}
