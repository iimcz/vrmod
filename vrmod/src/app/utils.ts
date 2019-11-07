import {DigitalSetInterface} from './digital-set.interface';
import {MetadataInterface} from './metadata.interface';
import {DigitalGroupInterface} from './digital-group.interface';
import {DigitalItemInterface} from './digital-item.interface';

export class Utils {


  static find_meta_key(metas: MetadataInterface[] | undefined, key: string): string | null {
    if (!metas) {
      return null;
    }
    for (const m of metas) {
      if (m.key === key) {
        return m.value;
      }
    }
    return null;
  }


  static get_description(dis: DigitalSetInterface | DigitalGroupInterface | DigitalItemInterface): string {
    const name = [Utils.find_meta_key(dis.metadata, 'description'), Utils.find_meta_key(dis.metadata, 'part_name')]
      .filter(e => e).join(' - ');
    return name || dis.description || '';
  }


}
