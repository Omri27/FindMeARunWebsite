import { Component, OnInit } from '@angular/core';
import {RunService} from "../shared/run.service";
import {AuthService} from "../../user/shared/auth.service";

@Component({
  selector: 'app-history-run-list',
  templateUrl: './history-run-list.component.html',
  styleUrls: ['./history-run-list.component.css']
})
export class HistoryRunListComponent implements OnInit {
historyRuns:any
  userid :any
  constructor(private runService:RunService,private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getAuthObservable().subscribe(user=>{
      let uid = user.uid;
      this.runService.postForHistory(uid).subscribe(x => {
        this.runService.postForHistory(uid).subscribe(historyRuns=>{
        this.historyRuns=historyRuns
        });
    })
  })
  }
}
