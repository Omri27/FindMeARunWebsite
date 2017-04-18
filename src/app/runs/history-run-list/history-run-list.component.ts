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
  constructor(private runService:RunService,private authService: AuthService) { }

  ngOnInit() {
    this.runService.getHistoryRuns();/*.subscribe(runs =>{
      this.historyRuns = runs;
    })*/
  }

}
