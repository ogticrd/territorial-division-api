import { Repository } from 'typeorm';

import { QueryDistrictDto } from '../dto';
import { District } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class DistrictStrategy
  implements QueryStrategy<District, QueryDistrictDto>
{
  async find(
    query: QueryDistrictDto,
    repository: Repository<District>,
  ): Promise<District | District[]> {
    const builder = new StrategyBuilder<District>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .findByRegionCode(query.regionCode)
      .findByProvinceCode(query.provinceCode)
      .findByMunicipalityCode(query.municipalityCode)
      .build();
  }
}
