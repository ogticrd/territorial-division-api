import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  ParamDistrictDto,
  ParamMunicipalityDto,
  ParamNeighborhoodDto,
  ParamProvinceDto,
  ParamRegionDto,
  ParamSectionDto,
  ParamSubNeighborhoodDto,
  QueryDistrictDto,
  QueryMunicipalityDto,
  QueryNeighborhoodDto,
  QueryProvinceDto,
  QueryRegionDto,
  QuerySectionDto,
  QuerySubNeighborhoodDto,
} from './dto';
import {
  Region,
  Province,
  Municipality,
  District,
  Section,
  Neighborhood,
  SubNeighborhood,
} from './entities';
import { QueryStrategy } from './interfaces';
import {
  DistrictStrategy,
  MunicipalityStrategy,
  NeighborhoodStrategy,
  ProvinceStrategy,
  RegionStrategy,
  SectionStrategy,
  SubNeighborhoodStrategy,
} from './strategies';

@Injectable()
export class TerritorialDivisionService {
  constructor(
    @InjectRepository(Region) private readonly regionRepo: Repository<Region>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
    @InjectRepository(Municipality)
    private readonly municipalityRepo: Repository<Municipality>,
    @InjectRepository(District)
    private readonly districtRepo: Repository<District>,
    @InjectRepository(Section)
    private readonly sectionRepo: Repository<Section>,
    @InjectRepository(Neighborhood)
    private readonly neighborhoodRepo: Repository<Neighborhood>,
    @InjectRepository(SubNeighborhood)
    private readonly subNeighborhoodRepo: Repository<SubNeighborhood>,
  ) {}

  async getRegions(query?: QueryRegionDto): Promise<Region[] | Region> {
    const strategy: QueryStrategy<Region, QueryRegionDto> =
      new RegionStrategy();

    const regions = await strategy.find(query, this.regionRepo);

    if (!regions) {
      throw new NotFoundException({
        valid: false,
        message: 'Region not found',
      });
    }

    return regions;
  }

  async getProvinces(query: QueryProvinceDto): Promise<Province[] | Province> {
    const strategy: QueryStrategy<Province, QueryProvinceDto> =
      new ProvinceStrategy();

    const provinces = await strategy.find(query, this.provinceRepo);

    if (!provinces) {
      throw new NotFoundException({
        valid: false,
        message: 'Province not found',
      });
    }

    return provinces;
  }

  async getMunicipalities(
    query?: QueryMunicipalityDto,
  ): Promise<Municipality[] | Municipality> {
    const strategy: QueryStrategy<Municipality, QueryMunicipalityDto> =
      new MunicipalityStrategy();

    const municipalities = await strategy.find(query, this.municipalityRepo);

    if (!municipalities) {
      throw new NotFoundException({
        valid: false,
        message: 'Municipality not found',
      });
    }

    return municipalities;
  }

  async getDistricts(query?: QueryDistrictDto): Promise<District[] | District> {
    const strategy: QueryStrategy<District, QueryDistrictDto> =
      new DistrictStrategy();

    const districts = await strategy.find(query, this.districtRepo);

    if (!districts) {
      throw new NotFoundException({
        valid: false,
        message: 'District not found',
      });
    }

    return districts;
  }

  async getSections(query?: QuerySectionDto): Promise<Section[] | Section> {
    const strategy: QueryStrategy<Section, QuerySectionDto> =
      new SectionStrategy();

    const sections = await strategy.find(query, this.sectionRepo);

    if (!sections) {
      throw new NotFoundException({
        valid: false,
        message: 'Section not found',
      });
    }

    return sections;
  }

  async getNeighborhoods(
    query?: QueryNeighborhoodDto,
  ): Promise<Neighborhood[] | Neighborhood> {
    const strategy: QueryStrategy<Neighborhood, QueryNeighborhoodDto> =
      new NeighborhoodStrategy();

    const neighborhoods = await strategy.find(query, this.neighborhoodRepo);

    if (!neighborhoods) {
      throw new NotFoundException({
        valid: false,
        message: 'Neighborhood not found',
      });
    }

    return neighborhoods;
  }

  async getSubNeighborhoods(
    query?: QuerySubNeighborhoodDto,
  ): Promise<SubNeighborhood[] | SubNeighborhood> {
    const strategy: QueryStrategy<SubNeighborhood, QuerySubNeighborhoodDto> =
      new SubNeighborhoodStrategy();

    const subNeighborhoods = await strategy.find(
      query,
      this.subNeighborhoodRepo,
    );

    if (!subNeighborhoods) {
      throw new NotFoundException({
        valid: false,
        message: 'SubNeighborhood not found',
      });
    }

    return subNeighborhoods;
  }

  async getRegionProvinces(params: ParamRegionDto): Promise<Province[]> {
    return await this.provinceRepo.find({
      where: { regionCode: params.regionCode },
    });
  }

  async getRegionProvince(params: ParamProvinceDto): Promise<Province> {
    const province = await this.provinceRepo.findOne({
      where: { regionCode: params.regionCode, code: params.provinceCode },
    });

    if (!province) {
      throw new NotFoundException('Province not found');
    }

    return province;
  }

  async getProvinceMunicipalities(
    params: ParamProvinceDto,
  ): Promise<Municipality[]> {
    const municipalities = await this.municipalityRepo.find({
      where: {
        provinceCode: params.provinceCode,
        regionCode: params.regionCode,
      },
    });

    if (!municipalities.length) {
      throw new NotFoundException('Province not found');
    }

    return municipalities;
  }

  async getProvinceMunicipality(
    params: ParamMunicipalityDto,
  ): Promise<Municipality> {
    const municipality = await this.municipalityRepo.findOne({
      where: {
        provinceCode: params.provinceCode,
        code: params.municipalityCode,
        regionCode: params.regionCode,
      },
    });

    if (!municipality) {
      throw new NotFoundException('Municipality not found');
    }

    return municipality;
  }

  async getMunicipalityDistricts(
    params: ParamMunicipalityDto,
  ): Promise<District[]> {
    const districts = await this.districtRepo.find({
      where: {
        provinceCode: params.provinceCode,
        municipalityCode: params.municipalityCode,
        regionCode: params.regionCode,
      },
    });

    if (!districts.length) {
      throw new NotFoundException('Municipality not found');
    }

    return districts;
  }

  async getMunicipalityDistrict(params: ParamDistrictDto): Promise<District> {
    const disctrict = await this.districtRepo.findOne({
      where: {
        provinceCode: params.provinceCode,
        code: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
      },
    });

    if (!disctrict) {
      throw new NotFoundException('District not found');
    }

    return disctrict;
  }

  async getDisctrictSections(params: ParamDistrictDto): Promise<Section[]> {
    const sections = await this.sectionRepo.find({
      where: {
        provinceCode: params.provinceCode,
        districtCode: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
      },
    });

    if (!sections.length) {
      throw new NotFoundException('District not found');
    }

    return sections;
  }

  async getDistrictSection(params: ParamSectionDto): Promise<Section> {
    const section = await this.sectionRepo.findOne({
      where: {
        provinceCode: params.provinceCode,
        districtCode: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
        code: params.sectionCode,
      },
    });

    if (!section) {
      throw new NotFoundException('Section not found');
    }

    return section;
  }

  async getSectionNeighborhoods(
    params: ParamSectionDto,
  ): Promise<Neighborhood[]> {
    const neighborhoods = await this.neighborhoodRepo.find({
      where: {
        provinceCode: params.provinceCode,
        districtCode: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
        sectionCode: params.sectionCode,
      },
    });

    if (!neighborhoods.length) {
      throw new NotFoundException('Section not found');
    }

    return neighborhoods;
  }

  async getSectionNeighborhood(
    params: ParamNeighborhoodDto,
  ): Promise<Neighborhood> {
    const neighborhood = await this.neighborhoodRepo.findOne({
      where: {
        provinceCode: params.provinceCode,
        districtCode: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
        sectionCode: params.sectionCode,
        code: params.neighborhoodCode,
      },
    });

    if (!neighborhood) {
      throw new NotFoundException('Neighborhood not found');
    }

    return neighborhood;
  }

  async getNeighborhoodSubNeighborhoods(
    params: ParamNeighborhoodDto,
  ): Promise<SubNeighborhood[]> {
    const subNeighborhoods = await this.subNeighborhoodRepo.find({
      where: {
        provinceCode: params.provinceCode,
        districtCode: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
        sectionCode: params.sectionCode,
        neighborhoodCode: params.neighborhoodCode,
      },
    });

    if (!subNeighborhoods.length) {
      throw new NotFoundException('Neighborhood not found');
    }

    return subNeighborhoods;
  }

  async getNeighborhoodSubNeighborhood(
    params: ParamSubNeighborhoodDto,
  ): Promise<SubNeighborhood> {
    const subNeighborhood = await this.subNeighborhoodRepo.findOne({
      where: {
        neighborprovinceCode: params.provinceCode,
        districtCode: params.districtCode,
        regionCode: params.regionCode,
        municipalityCode: params.municipalityCode,
        sectionCode: params.sectionCode,
        neighborhoodCode: params.neighborhoodCode,
        code: params.subNeighborhoodCode,
      },
    });

    if (!subNeighborhood) {
      throw new NotFoundException('SubNeighborhood not found');
    }

    return subNeighborhood;
  }
}
