import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-run-thumbnail',
  templateUrl: './run-thumbnail.component.html',
  styleUrls: ['./run-thumbnail.component.css']
})
export class RunThumbnailComponent implements OnInit {
@Input() run:any
  parentRoute:any
  constructor(private route:Router) {
  }
  ngOnInit() {
    this.parentRoute = this.route.url;
  }

}
