import { Raw, Repository } from 'typeorm';

import { QuerySectionDto } from '../dto';
import { Section } from '../entities';
import { QueryStrategy } from '../interfaces';

export class SectionStrategy
  implements QueryStrategy<Section, QuerySectionDto>
{
  find(
    query: QuerySectionDto,
    repository: Repository<Section>,
  ): Promise<Section | Section[]> {
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

    if (query.districtCode) {
      return repository.find({
        where: { districtCode: query.districtCode },
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
