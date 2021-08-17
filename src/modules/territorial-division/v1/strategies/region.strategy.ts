import { Repository } from 'typeorm';

import { QueryRegionDto } from '../dto';
import { Region } from '../entities';
import { QueryStrategy } from '../interfaces';

export class RegionStrategy implements QueryStrategy<Region, QueryRegionDto> {
  async find(
    query: QueryRegionDto,
    repository: Repository<Region>,
  ): Promise<Region | Region[]> {
    const queryBuilder = repository.createQueryBuilder();

    if (query.name) {
      queryBuilder.where('LOWER(name) like LOWER(:name)', {
        name: `%${query.name}%`,
      });
    }

    if (query.code) {
      queryBuilder.andWhere('code = :code', { code: query.code });
    }

    if (query.identifier) {
      queryBuilder.andWhere('identifier = :identifier', {
        identifier: query.identifier,
      });
    }

    const data = await queryBuilder.limit(100).getMany();

    return data.length === 1 ? data[0] : data;
  }
}
