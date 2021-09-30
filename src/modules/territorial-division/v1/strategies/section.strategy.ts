import { Repository } from 'typeorm';

import { QuerySectionDto } from '../dto';
import { Section } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class SectionStrategy
  implements QueryStrategy<Section, QuerySectionDto>
{
  async find(
    query: QuerySectionDto,
    repository: Repository<Section>,
  ): Promise<Section | Section[]> {
    const builder = new StrategyBuilder<Section>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .findByRegionCode(query.regionCode)
      .findByProvinceCode(query.provinceCode)
      .findByMunicipalityCode(query.municipalityCode)
      .findByDistrictCode(query.districtCode)
      .build();
  }
}
