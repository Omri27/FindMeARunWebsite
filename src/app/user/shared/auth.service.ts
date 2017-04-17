import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
currentUser:any
  constructor(private af: AngularFire) { }
    loginUser(userName : string, password: string){

    }
      isAuthenticated(){
        return !!this.currentUser;
    }
    logOut(){
      
    }
}
