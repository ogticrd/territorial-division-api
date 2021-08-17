import { Repository } from 'typeorm';

import { QueryMunicipalityDto } from '../dto';
import { Municipality } from '../entities';
import { QueryStrategy } from '../interfaces';

export class MunicipalityStrategy
  implements QueryStrategy<Municipality, QueryMunicipalityDto>
{
  async find(
    query: QueryMunicipalityDto,
    repository: Repository<Municipality>,
  ): Promise<Municipality | Municipality[]> {
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

    if (query.provinceCode) {
      queryBuilder.andWhere('"provinceCode" = :provinceCode', {
        provinceCode: query.provinceCode,
      });
    }

    if (query.regionCode) {
      queryBuilder.andWhere('"regionCode" = :regionCode', {
        regionCode: query.regionCode,
      });
    }

    const data = await queryBuilder.limit(100).getMany();

    return data.length === 1 ? data[0] : data;
  }
}
