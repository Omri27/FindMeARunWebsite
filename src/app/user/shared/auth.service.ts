import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders ,AuthMethods } from 'angularfire2';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
currentUser:any
  constructor(private af: AngularFire) { }
    loginUser(email : string, password: string){
      var credentials = {email:email , password: password};
      return Observable.create(observer => {
        this.af.auth.login(credentials, {
          provider: AuthProviders.Password,
          method: AuthMethods.Password
        }).then((authData) => {
          this.currentUser = authData;

          observer.next(authData);
        }).catch((error) => {
          observer.error(error);
        });
      });
    }
      isAuthenticated(){
     return  !!this.currentUser


    }
    getAuthObservable(){
      return this.af.auth;
    }
    checkAuthenticationStatus(){
   return this.af.auth.subscribe(user=>{
    if(user) {
      this.currentUser = user;
      return true;
    }
    else{
      this.currentUser=null;
      return false;}
  })
}
    logOut(){

      this.af.auth.logout();
    }
}
