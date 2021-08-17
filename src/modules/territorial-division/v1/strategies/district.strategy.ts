import { Repository } from 'typeorm';

import { QueryDistrictDto } from '../dto';
import { District } from '../entities';
import { QueryStrategy } from '../interfaces';

export class DistrictStrategy
  implements QueryStrategy<District, QueryDistrictDto>
{
  async find(
    query: QueryDistrictDto,
    repository: Repository<District>,
  ): Promise<District | District[]> {
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

    if (query.municipalityCode) {
      queryBuilder.andWhere('"municipalityCode" = :municipalityCode', {
        municipalityCode: query.municipalityCode,
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

    const data = await queryBuilder.getMany();

    return data.length === 1 ? data[0] : data;
  }
}
