import { Component, OnInit } from '@angular/core';
import {RunService} from '../shared/run.service'
import {AuthService} from "../../user/shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-run-list',
  templateUrl: 'feed-run-list.component.html',
  styleUrls: ['feed-run-list.component.css']
})
export class FeedRunListComponent implements OnInit {
  runs: any[]
  location: any = null;

  constructor(private runService: RunService, private authService: AuthService, private route: Router) {
  }

  ngOnInit() {

  }

  handleUserUpdated(location) {
console.log(location)
    this.authService.getAuthObservable().subscribe(user => {
      if (user != null && user.uid != null) {
        let userId = user.uid;
        let array = location.split(',');
        let Location = {longtitude: array[0], latitude: array[1]};
          switch (this.route.url) {
            case "/runs":
              this.runService.postFeedRuns(userId, Location).subscribe(x => {
                this.getRuns(userId);
              });
              break;
            case "/upcomingruns":
              this.getRuns(userId);
              break;
          }
      }


    })
  }

  getRuns(userId) {
    let date = new Date();
    this.runService.getFeedRuns(userId).subscribe(runs => {
      let arr = []
      runs = runs.filter(x => {
        var parts = x.date.split("-");
        let runDate = new Date(parts[1] + "-" + parts[0] + "-" + parts[2] + " " + x.time);
        if (date < runDate)
          return x;
      })
      switch (this.route.url) {
        case "/runs":
            this.runs = runs.sort(sortBydistance);
          break;
        case "/upcomingruns":
          this.runs = runs.filter(run => run.sign == true);
          break;
      }
    })
  }
}
function sortBydistance(run1:any, run2:any){
  var distance1 = +run1.distanceFrom;
  var distance2 = +run2.distanceFrom;
  if(distance1 > distance2){
    return 1;
  }else
    if(distance1 < distance2){
    return -1;
    }else
      return 0;
}
