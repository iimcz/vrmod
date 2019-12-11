import {Component, OnDestroy, OnInit} from '@angular/core';
import {VrmodService} from '../vrmod.service';
import {APIResponse} from '../apiresponse';
import {DigitalSetInterface} from '../digital-set.interface';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Utils} from '../utils';
import {DigitalGroupInterface} from '../digital-group.interface';
import {DigitalItemInterface} from '../digital-item.interface';
import {MetadataInterface} from '../metadata.interface';

@Component({
  selector: 'vrmod-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit, OnDestroy {
  public dis: DigitalSetInterface | null = null;
  public get_description = Utils.get_description;
  public results: DigitalItemInterface[] = [];

  private paramSub: Subscription | null = null;

  constructor(private vrmodService: VrmodService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe((p) => {
        if (p.id) {
          this.vrmodService.get_set_info(p.id).then((dis: APIResponse<DigitalSetInterface>) => {
            this.dis = dis.data as DigitalSetInterface;
            this.process_groups(this.dis);
          });
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.paramSub) {
      this.paramSub.unsubscribe();
      this.paramSub = null;
    }
  }

  groupStartsOdd(index: number): boolean {
    if (!this.dis || !this.dis.groups) {
      return false;
    }
    return this.dis.groups.slice(0, index).reduce((a, x) => a + (x.items ? x.items.length : 0), 0) % 2 === 1;
  }

  private process_groups(set: DigitalSetInterface): void {
    if (set.groups !== undefined) {

      // if (set.groups) {
      //   this.dis.groups = this.dis.groups;
      // }
      //
      Promise.all(set.groups.map(e => this.vrmodService.get_group_info(e.id_group))).then(grps => {
        if (set !== null) {
          const groups = grps.filter(g => g.data !== undefined).map(g => g.data as DigitalGroupInterface).sort((a: DigitalGroupInterface, b: DigitalGroupInterface) => {
            const aorder = (a && a.metadata && Utils.find_meta_key(a.metadata, 'order')) || null;
            const border = (b && b.metadata && Utils.find_meta_key(b.metadata, 'order')) || null;
            if (aorder === null) {
              return 1;
            }
            if (border === null) {
              return -1;
            }
            return aorder.localeCompare(border);
          });
          this.results = [];
          for (const grp of groups) {
            this.process_items(grp);
            if (grp.items) {
              this.results.push(...grp.items.filter(e => Utils.find_meta_key(e.metadata, 'result') === '1'));
            }
          }
          set.groups = groups.filter(e => e.items && e.items.length > 0);
        }
      });
    }
  }

  private process_items(group: DigitalGroupInterface): void {
    if (group.items !== undefined) {
      const items = group.items.filter(e => e && e.metadata && Utils.find_meta_key(e.metadata, 'public') === '1');
      group.items = items;
    }
  }
}

