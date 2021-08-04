import { Raw, Repository } from 'typeorm';

import { QueryMunicipalityDto } from '../dto';
import { Municipality } from '../entities';
import { QueryStrategy } from '../interfaces';

export class MunicipalityStrategy
  implements QueryStrategy<Municipality, QueryMunicipalityDto>
{
  find(
    query: QueryMunicipalityDto,
    repository: Repository<Municipality>,
  ): Promise<Municipality | Municipality[]> {
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

    if (query.provinceCode) {
      return repository.find({
        where: { provinceCode: query.provinceCode },
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
