import { Repository } from 'typeorm';

import { QueryNeighborhoodDto } from '../dto';
import { Neighborhood } from '../entities';
import { QueryStrategy } from '../interfaces';

export class NeighborhoodStrategy
  implements QueryStrategy<Neighborhood, QueryNeighborhoodDto>
{
  async find(
    query: QueryNeighborhoodDto,
    repository: Repository<Neighborhood>,
  ): Promise<Neighborhood | Neighborhood[]> {
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

    if (query.sectionCode) {
      queryBuilder.andWhere('"sectionCode" = :sectionCode', {
        sectionCode: query.sectionCode,
      });
    }

    if (query.districtCode) {
      queryBuilder.andWhere('"districtCode" = :districtCode', {
        districtCode: query.districtCode,
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

    const data = await queryBuilder.limit(100).getMany();

    return data.length === 1 ? data[0] : data;
  }
}
