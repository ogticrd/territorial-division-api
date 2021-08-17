import { Repository } from 'typeorm';

import { QueryMunicipalityDto } from '../dto';
import { Municipality } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class MunicipalityStrategy
  implements QueryStrategy<Municipality, QueryMunicipalityDto>
{
  async find(
    query: QueryMunicipalityDto,
    repository: Repository<Municipality>,
  ): Promise<Municipality | Municipality[]> {
    const builder = new StrategyBuilder<Municipality>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .findByRegionCode(query.regionCode)
      .findByProvinceCode(query.provinceCode)
      .build();
  }
}
