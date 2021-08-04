import { Raw, Repository } from 'typeorm';

import { QueryDistrictDto } from '../dto';
import { District } from '../entities';
import { QueryStrategy } from '../interfaces';

export class DistrictStrategy
  implements QueryStrategy<District, QueryDistrictDto>
{
  find(
    query: QueryDistrictDto,
    repository: Repository<District>,
  ): Promise<District | District[]> {
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

    if (query.municipalityCode) {
      return repository.find({
        where: { municipalityCode: query.municipalityCode },
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
