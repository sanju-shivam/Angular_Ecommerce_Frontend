import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private product: ProductService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams;
     console.log(id['id']);
    this.product.showSingleProduct(id).subscribe(res =>{
      //console.log(res);
      this.productDetails = res['product'];
      this.category = res['category'];
      this.subcategory = res['subcategory'];
      this.brand = res['brand'];
      //console.log(this.productDetails);
      this.productImages = res['images'];
    })
 
  }
  
}
