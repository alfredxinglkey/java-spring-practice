import {Component, Input, OnInit} from '@angular/core';
import {Page} from "../../../model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() page!:Page;

  constructor() { }

  ngOnInit(): void {
  }
}
