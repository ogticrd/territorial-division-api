import { Repository } from 'typeorm';

import { QueryProvinceDto } from '../dto';
import { Province } from '../entities';
import { QueryStrategy } from '../interfaces';
import { StrategyBuilder } from './builder';

export class ProvinceStrategy
  implements QueryStrategy<Province, QueryProvinceDto>
{
  async find(
    query: QueryProvinceDto,
    repository: Repository<Province>,
  ): Promise<Province | Province[]> {
    const builder = new StrategyBuilder<Province>(repository);

    return builder
      .findByName(query.name)
      .findByCode(query.code)
      .findByIndentifier(query.identifier)
      .findByRegionCode(query.regionCode)
      .build();
  }
}
