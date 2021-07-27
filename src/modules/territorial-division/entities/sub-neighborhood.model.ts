import { Entity, ManyToOne } from 'typeorm';

import { BaseModel } from './base.model';
import { Neighborhood } from './neighborhood.model';

@Entity()
export class SubNeighborhood extends BaseModel {
  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.subNeighborhood)
  neighborhood: Neighborhood;
}
