import { Entity, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';
import { Province } from './province.model';

@Entity()
export class Region extends BaseModel {
  @OneToMany(() => Province, (province) => province.region)
  provinces: Province[];
}
