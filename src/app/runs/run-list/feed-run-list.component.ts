import { Component, OnInit } from '@angular/core';
import {RunService} from '../shared/run.service'
import {AuthService} from "../../user/shared/auth.service";

@Component({
  selector: 'app-run-list',
  templateUrl: 'feed-run-list.component.html',
  styleUrls: ['feed-run-list.component.css']
})
export class FeedRunListComponent implements OnInit {
  runs:any[]
  constructor(private runService:RunService,private authService:AuthService ) { }

  ngOnInit() {
    this.authService.getAuthObservable().subscribe(user=>{
      let userId= user.uid;
      this.runService.getFeedRuns().subscribe(runs=>{
        this.runs=runs
    runs.forEach(run=>{
      for(var i=0; i<run.Runners.length;i++){
        console.log(run.Runners[i])
      }
    })
      })


  });

}
}
