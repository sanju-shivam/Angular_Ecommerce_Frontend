import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { AngularFireStorage,  AngularFireStorageReference  } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  data;
  downloadURL;
  error;
  selectedImage;
  fb;
  a;
  disable;

  constructor(
                private product : ProductService , 
                private storage: AngularFireStorage,
              ) { }
  // ref: AngularFireStorageReference;


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.product.showProduct().subscribe(res => {
      this.data = res;
    });
  }

  ProductImageForm =new FormGroup({
    ProductId : new FormControl(),
    image : new FormControl(),
  })

  // viewProduct(id){
  //   console.log(id);
  //   this.product.showSingleProduct(id);
  // }


  setId(ids){
    this.ProductImageForm.patchValue({
      ProductId : ids
    });
    console.log(this.ProductImageForm.value);
  }

  onFileSelected(event: any) {
    if(event.target.files[0].size <= 2999999){
      this.selectedImage = event.target.files[0];
      //console.log(this.selectedImage);
      this.error = false;
    }
    else{
      this.error = true;
    }
  }


  addImage(){      
      console.log(this.ProductImageForm.value);
      this.product.addImage(this.ProductImageForm.value).subscribe(res => {
        if(res['status'] == 200){
          this.ProductImageForm.reset();
          this.disable = false;
        }
        else if(res['status'] == 409){
          this.disable = false;
        }
        this.disable = false;
      });
  }

  collectData(){
    this.disable = true;
    var n = (Date.now()+'Product');
    const filePath = `ProductImage/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ProductImage/${n}`, this.selectedImage);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.fb = url;
            this.ProductImageForm.get('image').setValue(this.fb);
            console.log(this.fb);
            this.addImage();
          });
        })
      )
      .subscribe(url => {
        if (url) {
          this.a = url;
        }
      });
        
  }

  delete(id){
    this.product.deleteProduct(id).subscribe(res => {
      if(res['status']==200){
        this.getProducts();
      }
    });
  }

}
