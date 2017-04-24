import { Component, OnInit } from '@angular/core';
import {RunService} from "../shared/run.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../user/shared/auth.service";

@Component({
  selector: 'app-run-details',
  templateUrl: 'run-details.component.html',
  styleUrls: ['run-details.component.css']
})
export class RunDetailsComponent implements OnInit {
  run: any
  userId:any
  routeUrl:any

  constructor(private runService: RunService, private route: ActivatedRoute,private authService: AuthService) {
  }

  ngOnInit() {

this.authService.getAuthObservable().subscribe(user=>{
  this.userId = null;
  if(user)
    this.userId = user.uid
  this.route.url.subscribe(url => {
    this.routeUrl = url[0].path
    this.runService.getRun(this.userId,this.routeUrl, this.route.snapshot.params['id']).subscribe((run) => {
      let arr =[]
        for(let key in run.runners){
          arr.push(key);
        }
        arr.forEach(Id=>{
          if(this.userId  == Id )
            run.sign = true;
          else
            run.sign = false;
        })
      run.location.longtitude= +run.location.longtitude
      run.location.latitude= +run.location.latitude
      this.run = run;
    });
  })
})
  }
  radioButtonClick(yesNo:any){
    if(yesNo=="yes")
    this.runService.setLike(this.userId,this.run.$key,true);
    else
      this.runService.setLike(this.userId,this.run.$key,false);

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
}
