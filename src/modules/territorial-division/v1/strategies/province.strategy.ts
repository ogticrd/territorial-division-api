import { Repository } from 'typeorm';

import { QueryProvinceDto } from '../dto';
import { Province } from '../entities';
import { QueryStrategy } from '../interfaces';

export class ProvinceStrategy
  implements QueryStrategy<Province, QueryProvinceDto>
{
  async find(
    query: QueryProvinceDto,
    repository: Repository<Province>,
  ): Promise<Province | Province[]> {
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

    if (query.regionCode) {
      queryBuilder.andWhere('"regionCode" = :regionCode', {
        regionCode: query.regionCode,
      });
    }

    const data = await queryBuilder.limit(100).getMany();

    return data.length === 1 ? data[0] : data;
  }
}
