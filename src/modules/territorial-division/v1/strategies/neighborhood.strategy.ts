import { Repository } from 'typeorm';

import { QueryNeighborhoodDto } from '../dto';
import { Neighborhood } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class NeighborhoodStrategy
  implements QueryStrategy<Neighborhood, QueryNeighborhoodDto>
{
  async find(
    query: QueryNeighborhoodDto,
    repository: Repository<Neighborhood>,
  ): Promise<Neighborhood | Neighborhood[]> {
    const builder = new StrategyBuilder<Neighborhood>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .findByRegionCode(query.regionCode)
      .findByProvinceCode(query.provinceCode)
      .findByMunicipalityCode(query.municipalityCode)
      .findByDistrictCode(query.districtCode)
      .findBySectionCode(query.sectionCode)
      .build();
  }
}
