import { Repository } from 'typeorm';

import { QueryRegionDto } from '../dto';
import { Region } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class RegionStrategy implements QueryStrategy<Region, QueryRegionDto> {
  async find(
    query: QueryRegionDto,
    repository: Repository<Region>,
  ): Promise<Region | Region[]> {
    const builder = new StrategyBuilder<Region>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .build();
  }
}
