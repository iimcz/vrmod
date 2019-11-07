import {Component, Input, OnInit} from '@angular/core';
import {MetadataInterface} from '../metadata.interface';
import {Meta} from '@angular/platform-browser';

class MetaAttrib {
  public name: string;
  public value: string;
  public type: string;

  constructor(name: string, type: string = '') {
    this.name = name;
    this.type = type;
    this.value = '';
  }

  public get_instance(value: string): MetaAttrib {
    const m = new MetaAttrib(this.name, this.type);
    m.value = value;
    return m;
  }
}

@Component({
  selector: 'vrmod-show-item-metadata',
  templateUrl: './show-item-metadata.component.html',
  styleUrls: ['./show-item-metadata.component.scss']
})
export class ShowItemMetadataComponent implements OnInit {
  @Input() metadata: MetadataInterface[] | undefined;

  private attribMapping: [string, MetaAttrib][] = [
    ['description', new MetaAttrib('Název', '')],
    ['topic', new MetaAttrib('Téma', '')],
    ['part_name', new MetaAttrib('Název části', '')],
    ['name', new MetaAttrib('Autoři', 'names')],
    ['subject', new MetaAttrib('Účinkující', 'names')],
    ['date', new MetaAttrib('Datum', '')],
    ['abstract', new MetaAttrib('Abstrakt', '')],
    ['place', new MetaAttrib('Místo', '')],
    ['publisher', new MetaAttrib('Vydavatel', '')],
    ['length', new MetaAttrib('Délka', '')],

  ];


  constructor() {
  }

  ngOnInit() {
  }

  public get_attribs(): MetaAttrib[] {
    return this.attribMapping.map(m => {
      if (this.metadata === undefined) {
        return null;
      }
      const attr = this.metadata.find(x => x.key === m[0]);
      if (!attr) {
        return null;
      }
      return m[1].get_instance(attr.value);
    }).filter(m => m !== null) as MetaAttrib[];
  }

}
