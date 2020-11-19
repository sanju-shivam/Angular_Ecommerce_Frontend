import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  error;
  image;
  productImages;
  category;
  subcategory;
  brand;
  categorys;
  subcategorys;
  brands;
  product_id;
  imageIsDeleteing = false;
  selectedImage : null;
  downloadURL;
  fb;
  a;
  disable = false;
  n = (Date.now()+'Product');

  constructor(private product : ProductService,private route : ActivatedRoute, private storage: AngularFireStorage, private Route: Router) { }
  
  getAllProducttempraryImageForedit(){
    this.product.getAllSingleProductImagesForEdit(this.product_id).subscribe(res => {
        //console.log(res);
        this.imageIsDeleteing = false;
        this.productImages =  res['productImage'];
    });
  }


  ngOnInit(): void {
    this.product_id = this.route.snapshot.queryParams;
    this.getAllProducttempraryImageForedit();
    this.product.editSingleProduct(this.product_id).subscribe(res => {
      this.image = res['product']['image'];
      this.ProductForm.patchValue({
        name : res['product']['name'],
        Description : res['product']['description'],
        code : res['product']['code'],
        Quantity : res['product']['quantity'],
        CategoryId : res['product']['category_id'],
        SubCategoryId : res['product']['subcategory_id'],
        BrandId : res['product']['brand_id'],
        price : res['product']['price'],
        discountprice : res['product']['discount_price'],
      });

    });

    this.product.getallbrandcatsubcat().subscribe( res => {
      this.categorys = res['category'];
      this.subcategorys = res['subcategory'];
      this.brands = res['brand'];
    });
  }


  ProductForm =new FormGroup({
    name: new FormControl(),
    Description: new FormControl(),
    code: new FormControl(),
    Quantity: new FormControl(),
    CategoryId: new FormControl(),
    SubCategoryId: new FormControl(),
    BrandId: new FormControl(),
    image : new FormControl(),
    price : new FormControl(),
    discountprice : new FormControl(),
    id : new FormControl(),
  });
 

  deleteImage(id,url){
    const data = {
      'id': id,
      'product_id': this.product_id
    }
    
    // this.productImages.splice(id,1);
    // console.log(this.productImages);
    this.imageIsDeleteing = true;
    
    this.product.deleteSingleProductImage(data).subscribe(res =>{
      if(res['status'] == 200){
        this.getAllProducttempraryImageForedit();
        this.storage.storage.refFromURL(url).delete();
      }
    });
  }



  onFileSelected(event: any) {
    if(event.target.files[0].size <= 2999999){
      this.error = false;
      this.selectedImage = event.target.files[0];
      console.log(this.selectedImage);
      //this.ProductForm.get('image').setValue(this.selectedImage);
    }
    else{
      this.error = true;
      console.log('error in size upload size is 3 mb max');
    }
  }



  collectData(){
    if(this.selectedImage != null){
      this.disable = true;
      this.storage.storage.refFromURL(this.image).delete();
      const filePath = `Product/${this.n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`Product/${this.n}`, this.selectedImage);
      task
        .snapshotChanges()
          .pipe(
            finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
                this.fb = url;
                this.ProductForm.get('image').setValue(this.fb);
                console.log(this.fb);
                this.dataset();
              });
            })
          )
        .subscribe(url => {
            if (url) {
              this.a = url;
            }
          }); 
    }else{
      this.dataset();
    }
  }




  dataset(){      
    this.disable = true;
    this.ProductForm.get('id').setValue(this.product_id.id);
    // console.log(this.ProductForm.value,this.product_id);
    this.product.update(this.ProductForm.value).subscribe(res => {
      console.log(res);
      if(res['status'] == 200){
        this.disable = false;
        this.Route.navigate(['admin','product']);
      }
      else if(res['status'] == 409){
        this.disable = false;
      }
    });
}

















// CODE TO DELETE IMAGE IN FIREBASE STORAGE
  
  // delete(downloadUrl) {
  //   return this.storage.storage.refFromURL(downloadUrl).delete();
  // }


}
