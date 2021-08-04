import { Raw, Repository } from 'typeorm';

import { QueryProvinceDto } from '../dto';
import { Province } from '../entities';
import { QueryStrategy } from '../interfaces';

export class ProvinceStrategy
  implements QueryStrategy<Province, QueryProvinceDto>
{
  find(
    query: QueryProvinceDto,
    repository: Repository<Province>,
  ): Promise<Province | Province[]> {
    if (query.name) {
      return repository.find({
        where: {
          name: Raw((name: string) => `LOWER(${name}) Like '%${query.name}%'`),
        },
      });
    }

    if (query.code) {
      return repository.findOne({
        where: { code: query.code },
      });
    }

    if (query.identifier) {
      return repository.findOne({
        where: { identifier: query.identifier },
      });
    }

    if (query.regionCode) {
      return repository.find({
        where: { regionCode: query.regionCode },
      });
    }

    return repository.find();
  }
}
