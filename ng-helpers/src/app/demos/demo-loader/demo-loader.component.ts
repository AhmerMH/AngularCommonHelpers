import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-loader',
  templateUrl: './demo-loader.component.html',
  styleUrls: ['./demo-loader.component.scss']
})
export class DemoLoaderComponent implements OnInit {

  diameter: number;
  constructor() { }

  ngOnInit() {
  }

}
