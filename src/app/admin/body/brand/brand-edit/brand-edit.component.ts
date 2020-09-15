import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../brand/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  a;
  data;
  constructor(
                private brand : BrandService,
                private ActiveRoute: ActivatedRoute,
                private Route: Router
              ) { }

  BrandForm =new FormGroup({
    name:new FormControl(''),
    id: new FormControl(),
  })

  ngOnInit(): void {
    this.a = this.ActiveRoute.snapshot.paramMap.get('id');
    const data = [this.a];
      this.brand.editBrand(data).subscribe((res) => {
        this.data = res['data'];
        console.log(this.data.name);   
          this.BrandForm.patchValue({
            name : this.data.name,
            id: this.a
          });   
      });
  }


  UpdateData()
  {
    this.brand.UpdateBrand(this.BrandForm.value).subscribe((result)=>{
      console.log(result);
      if(result['status'] == 200){
        this.Route.navigate(['admin','category']);
      }
     });
  }

}
