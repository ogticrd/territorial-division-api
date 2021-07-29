import { Raw, Repository } from 'typeorm';

import { QueryRegionDto } from '../dto';
import { Region } from '../entities';
import { QueryStrategy } from '../interfaces';

export class RegionStrategy implements QueryStrategy<Region, QueryRegionDto> {
  find(
    query: QueryRegionDto,
    repository: Repository<Region>,
  ): Promise<Region | Region[]> {
    if (query.name) {
      return repository.find({
        where: {
          name: Raw((name: string) => `LOWER(${name}) Like '%${query.name}%'`),
        },
      });
    }

    if (query.code) {
      return repository.findOne({
        where: { code: query.code },
      });
    }

    return repository.find();
  }
}
