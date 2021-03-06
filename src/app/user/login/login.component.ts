import { Component } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../shared/auth.service'
import {isSuccess} from "@angular/http/src/http_utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService,private router:Router) { }

  login(formValues){
        this.authService.loginUser(formValues.email,formValues.password).subscribe((x)=> {
          this.router.navigate(['runs'])
        })



       }

}
