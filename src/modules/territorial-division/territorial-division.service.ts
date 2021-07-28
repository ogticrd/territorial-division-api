import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryLocationDto } from './dto';

import {
  Region,
  Province,
  Municipality,
  District,
  Section,
  Neighborhood,
  SubNeighborhood,
} from './entities';

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

  async getRegions(query?: QueryLocationDto): Promise<Region[]> {
    const regions = this.regionRepo.createQueryBuilder();

    if (query.name) {
      regions.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      regions.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      regions.where('id = :id', {
        id: query.id,
      });
    }

    return await regions.getMany();
  }

  async getProvinces(query: QueryLocationDto): Promise<Province[]> {
    const provinces = this.provinceRepo.createQueryBuilder();

    if (query.name) {
      provinces.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      provinces.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      provinces.where('id = :id', {
        id: query.id,
      });
    }

    return await provinces.getMany();
  }

  async getMunicipalities(query?: QueryLocationDto): Promise<Municipality[]> {
    const municipalities = this.municipalityRepo.createQueryBuilder();

    if (query.name) {
      municipalities.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      municipalities.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      municipalities.where('id = :id', {
        id: query.id,
      });
    }

    return await municipalities.getMany();
  }

  async getDistrict(districtId: number): Promise<District> {
    return await this.districtRepo.findOne(districtId);
  }

  async getDistricts(query?: QueryLocationDto): Promise<District[]> {
    const districts = this.districtRepo.createQueryBuilder();

    if (query.name) {
      districts.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      districts.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      districts.where('id = :id', {
        id: query.id,
      });
    }

    return await districts.getMany();
  }

  async getSections(query?: QueryLocationDto): Promise<Section[]> {
    const sections = this.sectionRepo.createQueryBuilder();

    if (query.name) {
      sections.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      sections.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      sections.where('id = :id', {
        id: query.id,
      });
    }

    return await sections.getMany();
  }

  async getNeighborhoods(query?: QueryLocationDto): Promise<Neighborhood[]> {
    const neighborhoods = this.neighborhoodRepo.createQueryBuilder();

    if (query.name) {
      neighborhoods.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      neighborhoods.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      neighborhoods.where('id = :id', {
        id: query.id,
      });
    }

    return await neighborhoods.getMany();
  }

  async getSubNeighborhoods(
    query?: QueryLocationDto,
  ): Promise<SubNeighborhood[]> {
    const subNeighborhoods = this.subNeighborhoodRepo.createQueryBuilder();

    if (query.name) {
      subNeighborhoods.where('LOWER(name) LIKE :name', {
        name: `%${query.name.toLowerCase()}%`,
      });
    }

    if (query.code) {
      subNeighborhoods.where('code = :code', {
        code: query.code,
      });
    }

    if (query.id) {
      subNeighborhoods.where('id = :id', {
        id: query.id,
      });
    }

    return await subNeighborhoods.getMany();
  }

  async getRegionProvinces(regionId: number): Promise<Province[]> {
    return await this.provinceRepo.find({ where: { region: regionId } });
  }

  async getRegionProvince(
    regionId: number,
    provinceId: number,
  ): Promise<Province> {
    const province = await this.provinceRepo.findOne({
      where: { region: regionId, id: provinceId },
    });

    if (!province) {
      throw new NotFoundException('Province not found');
    }

    return province;
  }

  async getProvinceMunicipalities(provinceId: number): Promise<Municipality[]> {
    const municipalities = await this.municipalityRepo.find({
      where: { province: provinceId },
    });

    if (!municipalities.length) {
      throw new NotFoundException('Province not found');
    }

    return municipalities;
  }

  async getProvinceMunicipality(
    provinceId: number,
    municipalityId: number,
  ): Promise<Municipality> {
    const municipality = await this.municipalityRepo.findOne({
      where: { province: provinceId, id: municipalityId },
    });

    if (!municipality) {
      throw new NotFoundException('Municipality not found');
    }

    return municipality;
  }

  async getMunicipalityDistricts(municipalityId: number): Promise<District[]> {
    const districts = await this.districtRepo.find({
      where: { municipality: municipalityId },
    });

    if (!districts.length) {
      throw new NotFoundException('Municipality not found');
    }

    return districts;
  }

  async getMunicipalityDistrict(
    municipalityId: number,
    districtId: number,
  ): Promise<District> {
    const disctrict = await this.districtRepo.findOne({
      where: { municipality: municipalityId, id: districtId },
    });

    if (!disctrict) {
      throw new NotFoundException('District not found');
    }

    return disctrict;
  }

  async getDisctrictSections(districtId: number): Promise<Section[]> {
    const sections = await this.sectionRepo.find({
      where: { district: districtId },
    });

    if (!sections.length) {
      throw new NotFoundException('District not found');
    }

    return sections;
  }

  async getDistrictSection(
    districtId: number,
    sectionId: number,
  ): Promise<Section> {
    const section = await this.sectionRepo.findOne({
      where: { district: districtId, id: sectionId },
    });

    if (!section) {
      throw new NotFoundException('Section not found');
    }

    return section;
  }

  async getSectionNeighborhoods(sectionId: number): Promise<Neighborhood[]> {
    const neighborhoods = await this.neighborhoodRepo.find({
      where: { section: sectionId },
    });

    if (!neighborhoods.length) {
      throw new NotFoundException('Section not found');
    }

    return neighborhoods;
  }

  async getSectionNeighborhood(
    sectionId: number,
    neighborhoodId: number,
  ): Promise<Neighborhood> {
    const neighborhood = await this.neighborhoodRepo.findOne({
      where: { section: sectionId, id: neighborhoodId },
    });

    if (!neighborhood) {
      throw new NotFoundException('Neighborhood not found');
    }

    return neighborhood;
  }

  async getNeighborhoodSubNeighborhoods(
    neighborhoodId: number,
  ): Promise<SubNeighborhood[]> {
    const subNeighborhoods = await this.subNeighborhoodRepo.find({
      where: { neighborhood: neighborhoodId },
    });

    if (!subNeighborhoods.length) {
      throw new NotFoundException('Neighborhood not found');
    }

    return subNeighborhoods;
  }

  async getNeighborhoodSubNeighborhood(
    neighborhoodId: number,
    subNeighborhoodId: number,
  ): Promise<SubNeighborhood> {
    const subNeighborhood = await this.subNeighborhoodRepo.findOne({
      where: { neighborhood: neighborhoodId, id: subNeighborhoodId },
    });

    if (!subNeighborhood) {
      throw new NotFoundException('SubNeighborhood not found');
    }

    return subNeighborhood;
  }
}
