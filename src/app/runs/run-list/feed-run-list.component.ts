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
  runs:any[]
  constructor(private runService:RunService,private authService:AuthService, private route:Router) { }

  ngOnInit() {
      let
        date = new Date();

        this.authService.getAuthObservable().subscribe(user => {
          try{
            if(user!= null && user.uid!=null) {
              let userId = user.uid;
              this.runService.getFeedRuns().subscribe(runs => {
                let arr = []
                runs = runs.filter(x => {
                  var parts = x.date.split("-");
                  let runDate = new Date(parts[1] + "-" + parts[0] + "-" + parts[2] + " " + x.time);
                  if (date < runDate)
                    return x;
                })
                runs.forEach(run => {
                  for (let key in run.runners) {
                    arr.push(key);
                  }
                  arr.forEach(Id => {
                    if (userId == Id) {
                      run.sign = true;
                    }else {
                      run.sign = false;
                    }
                  })
                  arr = [];
                })
                switch (this.route.url) {
                  case "/runs":
                    this.runs = runs;
                    break;
                  case "/upcomingruns":
                    this.runs = runs.filter(run => run.sign == true);
                    break;
                }
              })
            }
        }catch(err) {
            console.log(err);
          }
        });
    }

}
