import { Column, Entity } from 'typeorm';

import { BaseModel } from './base.model';

@Entity({ name: 'municipalities' })
export class Municipality extends BaseModel {
  @Column()
  provinceCode: string;

  @Column()
  regionCode: string;
}
