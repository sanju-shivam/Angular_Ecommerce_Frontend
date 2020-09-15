import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrandService } from '../../../brand/brand.service';

@Component({
  selector: 'app-brandcreate',
  templateUrl: './brandcreate.component.html',
  styleUrls: ['./brandcreate.component.css']
})
export class BrandcreateComponent implements OnInit {

  constructor(private brand : BrandService) { }

  ngOnInit(): void {
  }

  BrandForm =new FormGroup({
    name:new FormControl('')
 })

 collectData()
 {
   this.brand.saveBrand(this.BrandForm.value).subscribe((result)=>{
      if(result['status'] == 200){
        this.BrandForm.reset({})
      }
    });
 }
}
