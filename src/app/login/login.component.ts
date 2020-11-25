import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { auth } from 'firebase/app';
// import auth from "../../../../angular-ecommerce-LARAVEL API/node_modules/firebase"
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public  angularFireAuth:  AngularFireAuth) { }

  ngOnInit(): void {
  }

  login = new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
 })

  async SignUp() {
    await this.angularFireAuth.createUserWithEmailAndPassword(this.login.value.email, this.login.value.password).then(res => {
      console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
      console.log('Something is wrong:', error.message);
      });
    }

    logins(){
      this.angularFireAuth.signInWithEmailAndPassword(this.login.value.email, this.login.value.password).then(res => {
        console.log('You are Successfully log up!', res);
        })
        .catch(error => {
        console.log('Something is wrong:', error.message);
        });
    }
    

}
