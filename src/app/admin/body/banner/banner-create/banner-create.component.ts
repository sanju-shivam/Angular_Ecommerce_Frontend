import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from "@angular/fire/storage";
import { BannerService } from '../../../services/banner.service';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create.component.html',
  styleUrls: ['./banner-create.component.css']
})
export class BannerCreateComponent implements OnInit {

  selectedImage;
  disable: boolean;
  downloadURL: any;
  fb: any;
  a: any;
  n = (Date.now()+'Banner');

  constructor(private storage: AngularFireStorage, private Banner: BannerService) { }

  ngOnInit(): void {
  }

  BannerForm = new FormGroup({
    title : new FormControl(''),
    url   : new FormControl(''),
    image : new FormControl(''),
  });


  onFileSelected(event: any) {
    if(event.target.files[0].size <= 2999999){
      // this.error = false;
      this.selectedImage = event.target.files[0];
      console.log(this.selectedImage);
      //this.ProductForm.get('image').setValue(this.selectedImage);
    }
    else{
      // this.error = true;
      console.log('error in size upload size is 3 mb max');
    }
  }

  dataset(){
    this.Banner.saveBanner(this.BannerForm.value).subscribe(res => {
      if(res['status'] == 200){
        this.BannerForm.reset();
        this.disable = false;
      }
    });
  }

  
  collectData(){  
    this.disable = true;
    const filePath = `Banner/${this.n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Banner/${this.n}`, this.selectedImage);
    task
      .snapshotChanges()
        .pipe(
          finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
              this.fb = url;
              this.BannerForm.get('image').setValue(this.fb);
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
}
