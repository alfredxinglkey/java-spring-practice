import { Component, OnInit } from '@angular/core';
import {Page} from "../../model";
import {Pages} from "../../config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  pages: Page[] = Pages;

  constructor() { }

  ngOnInit(): void {
  }

}
