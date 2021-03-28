import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/admin/services/banner.service';

@Component({
  selector: 'app-banner-index',
  templateUrl: './banner-index.component.html',
  styleUrls: ['./banner-index.component.css']
})
export class BannerIndexComponent implements OnInit {

  Banners : any;

  constructor(private Banner: BannerService) { }

  ngOnInit(): void {
    this.getAllBanners()
  }

  getAllBanners(){
    this.Banner.getAllBanners().subscribe(res => {
      this.Banners = res['data'];
    })
  }

  delete(id){
    this.Banner.deleteBanner(id).subscribe(res => {
      this.Banners.filter(banner => banner.id != id);
    })
  }

}
