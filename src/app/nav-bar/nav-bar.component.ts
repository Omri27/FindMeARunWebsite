import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {AuthService} from "../user/shared/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    constructor(private authService:AuthService) {}
    ngOnInit() {}
    logOut(){
      this.authService.logOut();
    }

}
