import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity({ name: 'sub_neighborhoods' })
export class SubNeighborhood extends BaseModel {
  @Column()
  neighborhoodCode: string;

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
