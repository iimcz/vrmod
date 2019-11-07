import {Component, Input, OnInit} from '@angular/core';
import {DigitalItemInterface} from '../digital-item.interface';
import {VrmodService} from '../vrmod.service';
import {Lightbox} from 'ngx-lightbox';


@Component({
  selector: 'vrmod-show-item-data',
  templateUrl: './show-item-data.component.html',
  styleUrls: ['./show-item-data.component.scss']
})
export class ShowItemDataComponent implements OnInit {
  @Input() item: DigitalItemInterface | undefined;
  public dataUrl = '';
  public previewUrl = '';

  constructor(private vrmodService: VrmodService, private lightbox: Lightbox) {
  }

  ngOnInit() {
    if (this.item) {
      this.dataUrl = this.vrmodService.get_resource_url(this.item);
      this.previewUrl = this.vrmodService.get_resource_preview_url(this.item);
    }
  }

  public show_lightbox(): void {
    this.lightbox.open([{
      src: this.dataUrl,
      thumb: this.previewUrl,
      caption: ''
    }], 0);
  }
}
