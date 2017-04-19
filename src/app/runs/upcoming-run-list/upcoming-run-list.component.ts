import { Component, OnInit } from '@angular/core';
import {RunService} from "../shared/run.service";
import {AuthService} from "../../user/shared/auth.service";

@Component({
  selector: 'app-upcoming-run-list',
  templateUrl: 'upcoming-run-list.component.html',
  styleUrls: ['upcoming-run-list.component.css']
})
export class UpcomingRunListComponent implements OnInit {
  upComingRuns: any
  upComingRunsId:any
  constructor(private runService:RunService,private authService:AuthService) {

  }

  ngOnInit() {
    this.authService.getAuthObservable().subscribe(user => {
      let uid = user.uid;
      this.runService.getUpcomingRuns(uid).subscribe(upComingRuns => {
          this.upComingRunsId = upComingRuns.map(x=> {return x.$key});
        this.runService.getFeedRuns().subscribe(upComingFeedRuns =>{
          let FeedRuns =[];
          this.upComingRunsId.forEach(runId=>{
            let run= upComingFeedRuns.filter(run=> runId == run.$key);
            FeedRuns.push(run[0])
          })
          this.upComingRuns =FeedRuns
        })
      })
    })
  }

}
