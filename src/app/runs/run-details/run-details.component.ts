import { Component, OnInit } from '@angular/core';
import {RunService} from "../shared/run.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-run-details',
  templateUrl: 'run-details.component.html',
  styleUrls: ['run-details.component.css']
})
export class RunDetailsComponent implements OnInit {
  run:any
  constructor(private runService: RunService, private route:ActivatedRoute) { }

  ngOnInit() {
     this.runService.getRun(this.route.snapshot.params['id']).subscribe((run)=>this.run= run);

      //this.route.data.subscribe((run)=>{console.log(this.run);this.run=run})
  }

}
