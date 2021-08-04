import { Column, Entity } from 'typeorm';

import { BaseModel } from './base.model';

@Entity({ name: 'sections' })
export class Section extends BaseModel {
  @Column()
  districtCode: string;

  @Column()
  municipalityCode: string;

  @Column()
  provinceCode: string;

  @Column()
  regionCode: string;
}
