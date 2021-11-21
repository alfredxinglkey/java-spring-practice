import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseliner',
  templateUrl: './baseliner.component.html',
  styleUrls: ['./baseliner.component.less']
})
export class BaselinerComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
