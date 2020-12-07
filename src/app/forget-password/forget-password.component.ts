import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
                public  angularFireAuth:  AngularFireAuth,
                private Route: Router
            ) { }

  ngOnInit(): void {
  }

  forgetpassowrd = new FormGroup({
    email:new FormControl(''),
  })

  forget(){      
    this.angularFireAuth.sendPasswordResetEmail(this.forgetpassowrd.value.email).then(res => {
        this.forgetpassowrd.reset();
        this.Route.navigate(['admin/login']);
      })
      .catch(error => {
      console.log('Something is wrong:', error.message);
      });
  }

}
