import { Column, Entity } from 'typeorm';

import { BaseModel } from './base.model';

@Entity({ name: 'neighborhoods' })
export class Neighborhood extends BaseModel {
  @Column()
  sectionCode: string;

  @Column()
  districtCode: string;

  @Column()
  municipalityCode: string;

  @Column()
  provinceCode: string;

  @Column()
  regionCode: string;
}
