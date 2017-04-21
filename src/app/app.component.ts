import { Component } from '@angular/core';
import {AuthService} from "./user/shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private authService:AuthService){

  }
ngOnInit(){
this.authService.checkAuthenticationStatus()
}
}
