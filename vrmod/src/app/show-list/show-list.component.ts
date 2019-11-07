import {Component, OnInit} from '@angular/core';
import {VrmodService} from '../vrmod.service';
import {APIResponse} from '../apiresponse';
import {DigitalSetInterface} from '../digital-set.interface';
import {MetadataInterface} from '../metadata.interface';
import {Utils} from '../utils';

@Component({
  selector: 'vrmod-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  public sets: DigitalSetInterface[] = [];
  public get_description = Utils.get_description;

  constructor(private vrmodService: VrmodService) {
  }

  ngOnInit() {
    this.vrmodService.get_set_list().then((sets: APIResponse<DigitalSetInterface[]>) => {
      console.log(sets);
      this.sets = sets.data || [];
    });
  }


}
