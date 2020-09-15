import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandService } from '../../../brand/brand.service';

@Component({
  selector: 'app-brand-index',
  templateUrl: './brand-index.component.html',
  styleUrls: ['./brand-index.component.css']
})
export class BrandIndexComponent implements OnInit {
  data;
  constructor(
                private brand: BrandService,
                private ActiveRoute: ActivatedRoute,
                private Route: Router
              ) { }

  ngOnInit(): void {
    this.TogetallBrand();
  }

  TogetallBrand(){
    this.brand.getallBrand().subscribe( res => {
      this.data =  res;
     });
  }

  delete(id){
    const data = [ id];
    this.brand.deleteBrand(data).subscribe( res => {
      this.TogetallBrand();
     });
  }

  edit(id){
    const ids = [ id];
    this.Route.navigate(['../edit',id], {relativeTo: this.ActiveRoute});
  }


}
