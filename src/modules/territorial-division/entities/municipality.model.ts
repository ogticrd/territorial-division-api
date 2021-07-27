import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';
import { District } from './district.model';
import { Province } from './province.model';

@Entity()
export class Municipality extends BaseModel {
  @ManyToOne(() => Province, (province) => province.municipality)
  province: Province;

  @OneToMany(() => District, (district) => district.municipality)
  district: District;
}
