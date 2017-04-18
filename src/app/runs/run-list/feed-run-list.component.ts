import { Component, OnInit } from '@angular/core';
import {RunService} from '../shared/run.service'

@Component({
  selector: 'app-run-list',
  templateUrl: 'feed-run-list.component.html',
  styleUrls: ['feed-run-list.component.css']
})
export class FeedRunListComponent implements OnInit {
  runs:any[]
  constructor(private runService:RunService ) { }

  ngOnInit() {
    this.runService.getFeedRuns().subscribe(events=>{this.runs=events})
  }

}
