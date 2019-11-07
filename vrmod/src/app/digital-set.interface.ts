import {MetadataInterface} from './metadata.interface';
import {DigitalGroupInterface} from './digital-group.interface';

export interface DigitalSetInterface {
  id_set: string;
  id_user: string;
  created: string;
  description?: string;

  metadata?: MetadataInterface[];
  groups?: DigitalGroupInterface[];
  // author?: UserInterface;
}
