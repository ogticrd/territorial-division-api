import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseModel } from './base.model';
import { Section } from './section.model';
import { SubNeighborhood } from './sub-neighborhood.model';

@Entity()
export class Neighborhood extends BaseModel {
  @ManyToOne(() => Section, (section) => section.neighborhood)
  section: Section;

  @OneToMany(
    () => SubNeighborhood,
    (subNeighborhood) => subNeighborhood.neighborhood,
  )
  subNeighborhood: SubNeighborhood;
}
