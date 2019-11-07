import {Component, Input, OnInit} from '@angular/core';
import {DigitalGroupInterface} from '../digital-group.interface';
import {Utils} from '../utils';

@Component({
  selector: 'vrmod-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.scss']
})
export class ShowGroupComponent implements OnInit {
  @Input() group: DigitalGroupInterface | undefined;
  @Input() oddStart = false;
  public get_description = Utils.get_description;
  public find_meta_key = Utils.find_meta_key;

  constructor() {
  }

  ngOnInit() {
  }

}
