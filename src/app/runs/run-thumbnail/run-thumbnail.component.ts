import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-run-thumbnail',
  templateUrl: './run-thumbnail.component.html',
  styleUrls: ['./run-thumbnail.component.css']
})
export class RunThumbnailComponent implements OnInit {
@Input() run:any
  constructor() { }

  ngOnInit() {
  }

}
