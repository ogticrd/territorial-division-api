import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';
import { District } from './district.model';
import { Neighborhood } from './neighborhood.model';

@Entity()
export class Section extends BaseModel {
  @ManyToOne(() => District, (district) => district.section)
  district: District;

  @OneToMany(() => Neighborhood, (neighborhood) => neighborhood.section)
  neighborhood: Neighborhood;
}
