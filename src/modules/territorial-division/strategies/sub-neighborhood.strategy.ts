import { Raw, Repository } from 'typeorm';

import { QuerySubNeighborhoodDto } from '../dto';
import { SubNeighborhood } from '../entities';
import { QueryStrategy } from '../interfaces';

export class SubNeighborhoodStrategy
  implements QueryStrategy<SubNeighborhood, QuerySubNeighborhoodDto>
{
  find(
    query: QuerySubNeighborhoodDto,
    repository: Repository<SubNeighborhood>,
  ): Promise<SubNeighborhood | SubNeighborhood[]> {
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

    if (query.neighborhoodCode) {
      return repository.find({
        where: { neighborhoodCode: query.neighborhoodCode },
      });
    }

    if (query.sectionCode) {
      return repository.find({
        where: { sectionCode: query.sectionCode },
      });
    }

    if (query.districtCode) {
      return repository.find({
        where: { districtCode: query.districtCode, take: 100 },
      });
    }

    if (query.municipalityCode) {
      return repository.find({
        where: { municipalityCode: query.municipalityCode, take: 100 },
      });
    }

    if (query.provinceCode) {
      return repository.find({
        where: { provinceCode: query.provinceCode, take: 100 },
      });
    }

    if (query.regionCode) {
      return repository.find({
        where: { regionCode: query.regionCode, take: 100 },
      });
    }

    return repository.find({ take: 100 });
  }
}
