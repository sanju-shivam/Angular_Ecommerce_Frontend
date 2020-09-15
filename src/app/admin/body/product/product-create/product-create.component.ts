import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product/product.service';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categorys;
  brands;
  subcategorys;
  selectedImage;
  downloadURL;
  fb;
  a;
  error = false;
  submitError;
  disable = false;


  n = (Date.now()+'Product');
  constructor(private product: ProductService , private storage: AngularFireStorage) { }

  ProductForm =new FormGroup({
   name: new FormControl(null,Validators.required),
   Description: new FormControl(null,Validators.required),
   code: new FormControl(null,Validators.required),
   Quantity: new FormControl(null,Validators.required),
   CategoryId: new FormControl(null,Validators.required),
   SubCategoryId: new FormControl(null,Validators.required),
   BrandId: new FormControl(null,Validators.required),
   image : new FormControl(null,Validators.required),
   price : new FormControl(null,Validators.required),
   discountprice : new FormControl(),
 })
  


  ngOnInit(): void {
    this.product.getallbrandcatsubcat().subscribe( res => {
      this.categorys = res['category'];
      this.subcategorys = res['subcategory'];
      this.brands = res['brand'];
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

 
  dataset(){      
      console.log(this.ProductForm.value);
      this.product.saveProduct(this.ProductForm.value).subscribe(res => {
        if(res['status'] == 200){
          this.ProductForm.reset();
          this.disable = false;
        }
        else if(res['status'] == 409){
          this.submitError = true;
          this.disable = false;
        }
      });
  }

  collectData(){  
    this.disable = true;
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
  }


   // addIngredent() {
  //   console.log('ratta');
  //   // tslint:disable-next-line: no-angle-bracket-type-assertion
  //   (<FormArray>  this.ProductForm.get('ingredents')).push(
  //     new FormGroup({
  //       image: new FormControl('kdfg',),
  //     })
  //   );
  // }

}
