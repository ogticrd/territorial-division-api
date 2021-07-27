import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';
import { Municipality } from './municipality.model';
import { Region } from './region.model';

@Entity()
export class Province extends BaseModel {
  @ManyToOne(() => Region, (region) => region.provinces)
  region: Region;

  @OneToMany(() => Municipality, (municipality) => municipality.province)
  municipality: Municipality;
}
