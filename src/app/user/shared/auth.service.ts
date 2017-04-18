import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders ,AuthMethods } from 'angularfire2';
import {Observable} from "rxjs/Observable";
import {isSuccess} from "@angular/http/src/http_utils";

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
          console.log(authData)
        }).catch((error) => {
          observer.error(error);
        });
      });
    }
      isAuthenticated(){
        return !!this.currentUser;
    }
    logOut(){

    }
}
