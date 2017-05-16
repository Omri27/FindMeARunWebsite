import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {RunService} from "../shared/run.service";
import {AuthService} from "../../user/shared/auth.service";

@Component({
  selector: 'app-run-thumbnail',
  templateUrl: './run-thumbnail.component.html',
  styleUrls: ['./run-thumbnail.component.css']
})
export class RunThumbnailComponent implements OnInit {
@Input() run:any
  parentRoute:any
  constructor(private route:Router, private runService:RunService, private authService:AuthService) {

  }
  ngOnInit() {
    this.parentRoute = this.route.url;
  }
  signToRun(runId:any){
    this.authService.getAuthObservable().subscribe(user=>{
      let userId = user.uid;
      this.runService.signToRun(userId,runId);
    })
  }
  cancelSign(runId:any){
    this.authService.getAuthObservable().subscribe(user=>{
      let userId = user.uid;
      this.runService.signOut(userId,runId);
    })
  }
  deleteHistoryRun(runId:any){
    this.authService.getAuthObservable().subscribe(user=>{
      let userId = user.uid;
      this.runService.deleteHistoryRun(userId,runId);
    })
  }
}
