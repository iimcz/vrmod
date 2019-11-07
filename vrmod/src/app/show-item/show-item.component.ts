import {Component, Input, OnInit} from '@angular/core';
import {DigitalItemInterface} from '../digital-item.interface';

@Component({
  selector: 'vrmod-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  @Input() item: DigitalItemInterface | undefined;
  @Input() odd = false;
  constructor() {
  }

  ngOnInit() {
  }



}
