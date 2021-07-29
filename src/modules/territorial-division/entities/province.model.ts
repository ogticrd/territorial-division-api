import { Column, Entity } from 'typeorm';

import { BaseModel } from './base.model';

@Entity({ name: 'provinces' })
export class Province extends BaseModel {
  @Column()
  regionCode: string;
}
