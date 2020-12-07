import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  code = this.route.snapshot.queryParams['oobCode'];
  errorMessage: any;

  constructor(  
              public  angularFireAuth:  AngularFireAuth,
              private Route: Router,
              private route: ActivatedRoute
            ) { }

  ngOnInit(): void {
  }

  resetpassword = new FormGroup({
    cnfrmpassword:new FormControl(''),
    password: new FormControl('')
 })

 resetpassowrd(){
   if(this.resetpassword.value.cnfrmpassword != this.resetpassword.value.password){
    this.errorMessage = "Password do not match";
   }
   else{
     this.reset();
   }
 }

  reset(){
      this.angularFireAuth
      .confirmPasswordReset(this.code, this.resetpassword.value.password)
      .then(res =>{ 
      // console.log(res);
      this.Route.navigate(['admin/login']);
      })
      .catch(err => {
        console.log(err);
      this.errorMessage = err.code; // check this helper class at the bottom
    });
  }

}
