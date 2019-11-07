import {MetadataInterface} from './metadata.interface';
import {DigitalItemInterface} from './digital-item.interface';

export interface DigitalGroupInterface {
  id_group: string;
  id_user: string;
  created: string;
  description?: string;
  items?: DigitalItemInterface[];
  metadata?: MetadataInterface[];
}
