import { Repository, SelectQueryBuilder } from 'typeorm';

import { Utilities } from '@utils/index';

export class StrategyBuilder<T> {
  private readonly queryBuilder: SelectQueryBuilder<T>;

  constructor(repository: Repository<T>) {
    this.queryBuilder = repository.createQueryBuilder();
  }

  findByName(name: string) {
    if (name) {
      this.queryBuilder.andWhere('LOWER(name) like LOWER(:name)', {
        name: `%${name}%`,
      });
    }

    return this;
  }

  findByCode(code: string) {
    if (code) {
      this.queryBuilder.andWhere('code = :code', { code });
    }

    return this;
  }

  findByIndentifier(identifier: string) {
    if (identifier) {
      this.queryBuilder.andWhere('identifier = :identifier', { identifier });
    }

    return this;
  }

  findByRegionCode(regionCode: string) {
    if (regionCode) {
      this.queryBuilder.andWhere('"regionCode" = :regionCode', { regionCode });
    }

    return this;
  }

  findByProvinceCode(provinceCode: string) {
    if (provinceCode) {
      this.queryBuilder.andWhere('"provinceCode" = :provinceCode', {
        provinceCode,
      });
    }

    return this;
  }

  findByMunicipalityCode(municipalityCode: string) {
    if (municipalityCode) {
      this.queryBuilder.andWhere('"municipalityCode" = :municipalityCode', {
        municipalityCode,
      });
    }

    return this;
  }

  findByDistrictCode(districtCode: string) {
    if (districtCode) {
      this.queryBuilder.andWhere('"districtCode" = :districtCode', {
        districtCode,
      });
    }

    return this;
  }

  findBySectionCode(sectionCode: string) {
    if (sectionCode) {
      this.queryBuilder.andWhere('"sectionCode" = :sectionCode', {
        sectionCode,
      });
    }

    return this;
  }

  findByNeighborhoodCode(neighborhoodCode: string) {
    if (neighborhoodCode) {
      this.queryBuilder.andWhere('"neighborhoodCode" = :neighborhoodCode', {
        neighborhoodCode,
      });
    }

    return this;
  }

  async build() {
    const data = await this.queryBuilder.limit(100).getMany();

    return Utilities.handleResponse<T>(data);
  }
}
