import { Repository } from 'typeorm';

import { QuerySectionDto } from '../dto';
import { Section } from '../entities';
import { QueryStrategy } from '../interfaces';

export class SectionStrategy
  implements QueryStrategy<Section, QuerySectionDto>
{
  async find(
    query: QuerySectionDto,
    repository: Repository<Section>,
  ): Promise<Section | Section[]> {
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
