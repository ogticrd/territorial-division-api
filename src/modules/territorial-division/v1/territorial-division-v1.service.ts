import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
import { TerritorialDivision, TerritorialDivisionLength } from './enum';
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
export class TerritorialDivisionV1Service {
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

    return await strategy.find(query, this.regionRepo);
  }

  async getProvinces(query: QueryProvinceDto): Promise<Province[] | Province> {
    const strategy: QueryStrategy<Province, QueryProvinceDto> =
      new ProvinceStrategy();

    return await strategy.find(query, this.provinceRepo);
  }

  async getMunicipalities(
    query?: QueryMunicipalityDto,
  ): Promise<Municipality[] | Municipality> {
    const strategy: QueryStrategy<Municipality, QueryMunicipalityDto> =
      new MunicipalityStrategy();

    return await strategy.find(query, this.municipalityRepo);
  }

  async getDistricts(query?: QueryDistrictDto): Promise<District[] | District> {
    const strategy: QueryStrategy<District, QueryDistrictDto> =
      new DistrictStrategy();

    return await strategy.find(query, this.districtRepo);
  }

  async getSections(query?: QuerySectionDto): Promise<Section[] | Section> {
    const strategy: QueryStrategy<Section, QuerySectionDto> =
      new SectionStrategy();

    return await strategy.find(query, this.sectionRepo);
  }

  async getNeighborhoods(
    query?: QueryNeighborhoodDto,
  ): Promise<Neighborhood[] | Neighborhood> {
    const strategy: QueryStrategy<Neighborhood, QueryNeighborhoodDto> =
      new NeighborhoodStrategy();

    return await strategy.find(query, this.neighborhoodRepo);
  }

  async getSubNeighborhoods(
    query?: QuerySubNeighborhoodDto,
  ): Promise<SubNeighborhood[] | SubNeighborhood> {
    const strategy: QueryStrategy<SubNeighborhood, QuerySubNeighborhoodDto> =
      new SubNeighborhoodStrategy();

    return await strategy.find(query, this.subNeighborhoodRepo);
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

  async getTerritorialHierarchy(identifier: string) {
    return this.territorialDivisionFactory(identifier);
  }

  private async territorialDivisionFactory(identifier: string) {
    let response = {};

    switch (identifier.length) {
      case TerritorialDivisionLength.REGION:
        const region = await this.findByIndentifier(
          this.regionRepo,
          identifier,
          TerritorialDivision.REGION,
        );

        response = {
          level: TerritorialDivision.REGION,
          region: region.identifier,
          province: null,
          municipality: null,
          district: null,
          section: null,
          neighborhood: null,
          subNeighborhood: null,
        };

        break;
      case TerritorialDivisionLength.PROVINCE:
        const province = await this.findByIndentifier(
          this.provinceRepo,
          identifier,
          TerritorialDivision.PROVINCE,
        );

        response = {
          level: TerritorialDivision.PROVINCE,
          region: province.identifier.slice(0, -2),
          province: province.identifier,
          municipality: null,
          district: null,
          section: null,
          neighborhood: null,
          subNeighborhood: null,
        };

        break;
      case TerritorialDivisionLength.MUNICIPALITY:
        const municipality = await this.findByIndentifier(
          this.municipalityRepo,
          identifier,
          TerritorialDivision.MUNICIPALITY,
        );

        response = {
          level: TerritorialDivision.MUNICIPALITY,
          region: municipality.identifier.slice(0, -4),
          province: municipality.identifier.slice(0, -2),
          municipality: municipality.identifier,
          district: null,
          section: null,
          neighborhood: null,
          subNeighborhood: null,
        };

        break;
      case TerritorialDivisionLength.DISTRICT:
        const district = await this.findByIndentifier(
          this.districtRepo,
          identifier,
          TerritorialDivision.DISTRICT,
        );

        response = {
          level: TerritorialDivision.DISTRICT,
          region: district.identifier.slice(0, -6),
          province: district.identifier.slice(0, -4),
          municipality: district.identifier.slice(0, -2),
          district: district.identifier,
          section: null,
          neighborhood: null,
          subNeighborhood: null,
        };

        break;
      case TerritorialDivisionLength.SECTION:
        const section = await this.findByIndentifier(
          this.sectionRepo,
          identifier,
          TerritorialDivision.SECTION,
        );

        response = {
          level: TerritorialDivision.SECTION,
          region: section.identifier.slice(0, -8),
          province: section.identifier.slice(0, -6),
          municipality: section.identifier.slice(0, -4),
          district: section.identifier.slice(0, -2),
          section: section.identifier,
          neighborhood: null,
          subNeighborhood: null,
        };

        break;
      case TerritorialDivisionLength.NEIGHBORHOOD:
        const neighborhood = await this.findByIndentifier(
          this.neighborhoodRepo,
          identifier,
          TerritorialDivision.NEIGHBORHOOD,
        );

        response = {
          level: TerritorialDivision.NEIGHBORHOOD,
          region: neighborhood.identifier.slice(0, -11),
          province: neighborhood.identifier.slice(0, -9),
          municipality: neighborhood.identifier.slice(0, -7),
          district: neighborhood.identifier.slice(0, -5),
          section: neighborhood.identifier.slice(0, -3),
          neighborhood: neighborhood.identifier,
          subNeighborhood: null,
        };

        break;
      case TerritorialDivisionLength.SUB_NEIGHBORHOOD:
        const subNeighborhood = await this.findByIndentifier(
          this.subNeighborhoodRepo,
          identifier,
          TerritorialDivision.SUB_NEIGHBORHOOD,
        );

        response = {
          level: TerritorialDivision.SUB_NEIGHBORHOOD,
          region: subNeighborhood.identifier.slice(0, -13),
          province: subNeighborhood.identifier.slice(0, -11),
          municipality: subNeighborhood.identifier.slice(0, -9),
          district: subNeighborhood.identifier.slice(0, -7),
          section: subNeighborhood.identifier.slice(0, -5),
          neighborhood: subNeighborhood.identifier.slice(0, -2),
          subNeighborhood: subNeighborhood.identifier,
        };

        break;

      default:
        throw new BadRequestException({
          valid: false,
          message: 'Invalid code',
        });
    }

    return response;
  }

  private async findByIndentifier<T>(
    repo: Repository<T>,
    identifier: string,
    level: string,
  ) {
    const entity = await repo.findOne({
      where: { identifier },
    });

    if (!entity) {
      throw new NotFoundException({
        valid: false,
        message: `${level.charAt(0).toUpperCase() + level.slice(1)} not found`,
      });
    }

    return entity;
  }
}
