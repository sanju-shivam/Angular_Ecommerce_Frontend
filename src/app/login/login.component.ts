import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { auth } from 'firebase/app';
// import auth from "../../../../angular-ecommerce-LARAVEL API/node_modules/firebase"
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  code = this.route.snapshot.queryParams['oobCode'];

  constructor(public  angularFireAuth:  AngularFireAuth, private Route: Router, private route: ActivatedRoute) { 
    localStorage.removeItem('userid');
  }

  ngOnDestroy() :void {
    location.reload();
  }
  

  ngOnInit(): void {
  }

  login = new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
 })

  async SignUp() {
    await this.angularFireAuth.createUserWithEmailAndPassword(this.login.value.email, this.login.value.password).then(res => {
           console.log('You are Successfully signed up!', res.user.uid);
          })
          .catch(error => {
            console.log('Something is wrong:', error.message);
          });
  }

    logins(){
      this.angularFireAuth.signInWithEmailAndPassword(this.login.value.email, this.login.value.password).then(res => {
        console.log('You are Successfully log up!', res);
        localStorage.setItem('userid',res.user.uid);
        this.Route.navigateByUrl('/admin');
        //this.Route.navigate(['admin']);
        })
        .catch(error => {
        console.log('Something is wrong:', error.message);
        });
    }
   
    reset(){      
      this.angularFireAuth.sendPasswordResetEmail(this.login.value.email).then(res => {
        console.log('You are Successfully log up!', res);
        })
        .catch(error => {
        console.log('Something is wrong:', error.message);
        });
    }
    

}
