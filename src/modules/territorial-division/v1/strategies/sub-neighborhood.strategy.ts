import { Repository } from 'typeorm';

import { QuerySubNeighborhoodDto } from '../dto';
import { SubNeighborhood } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class SubNeighborhoodStrategy
  implements QueryStrategy<SubNeighborhood, QuerySubNeighborhoodDto>
{
  async find(
    query: QuerySubNeighborhoodDto,
    repository: Repository<SubNeighborhood>,
  ): Promise<SubNeighborhood | SubNeighborhood[]> {
    const builder = new StrategyBuilder<SubNeighborhood>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .findByRegionCode(query.regionCode)
      .findByProvinceCode(query.provinceCode)
      .findByMunicipalityCode(query.municipalityCode)
      .findByDistrictCode(query.districtCode)
      .findBySectionCode(query.sectionCode)
      .findByNeighborhoodCode(query.neighborhoodCode)
      .build();
  }
}
