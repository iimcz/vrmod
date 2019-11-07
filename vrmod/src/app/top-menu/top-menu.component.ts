import { Component, OnInit } from '@angular/core';
import {emodUrl} from '../app.site-config';

@Component({
  selector: 'vrmod-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  public emodUrl = emodUrl;
  constructor() { }

  ngOnInit() {
  }

}
