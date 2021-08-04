import { Column, Entity } from 'typeorm';

import { BaseModel } from './base.model';

@Entity({ name: 'districts' })
export class District extends BaseModel {
  @Column()
  municipalityCode: string;

  @Column()
  provinceCode: string;

  @Column()
  regionCode: string;
}
