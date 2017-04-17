import { Component, OnInit } from '@angular/core';
import {RunService} from '../shared/run.service'

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css']
})
export class RunListComponent implements OnInit {
  runs:any[]
  constructor(private runService:RunService ) { }

  ngOnInit() {
    this.runService.getRuns().subscribe(events=>{this.runs=events})
  }

}
