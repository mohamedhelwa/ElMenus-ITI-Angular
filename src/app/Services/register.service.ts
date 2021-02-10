import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  flag:boolean = false;
  user:any;
  constructor(private auth:AngularFireAuth) { }

  async register(email:string,pass:string){
   await this.auth.createUserWithEmailAndPassword(email,pass)
        .then(
          (user)=>{
            console.log(user);
            this.flag = true
          }
        ).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error)
          this.flag = false
        });
      // return this.flag
  }

  checkUser():boolean{
    var user = this.auth.currentUser;

      if (user) {
        this.flag = true;
      } else {

        this.flag = false;
      }
      return this.flag;
    // this.auth.(await function(user) {
    //   if(user){
    //     this.user = user;
    //     console.log("Hello "+user.email)
    //     this.flag = true;
    //   }
    //   else{
    //     console.log('please login')
    //     this.flag = false;
    //   }
    // })
    // return this.flag;
  }

  signOut(){

    
    
    // this.auth.signOut().then(
    //   function(){
    //     this.flag = false;
    //     console.log("in service "+this.flag)
        
    //   }, function(error) {
    //     console.log("Error!!!")
    //     this.flag = true
    //   }
    // ).catch((err)=>{
      
    // })
    // return this.flag
  }

  login(email:string,password:string){
    this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("Welcome "+user.email);
        this.flag = true;
        console.log(this.flag);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
}
