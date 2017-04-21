import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(private authService:AuthService, private route:Router) {

  }
  canActivate(route:ActivatedRouteSnapshot){
    if(this.authService.isAuthenticated())
      return true;
    this.route.navigate(['user/login'])
    return false;
  }
}
