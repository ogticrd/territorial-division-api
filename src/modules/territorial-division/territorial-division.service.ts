import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';
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

  private async findByQuery<T>(
    repo: Repository<T>,
    query: QueryLocationDto,
  ): Promise<T | T[]> {
    if (query.name) {
      return repo.find({
        where: {
          name: Raw((name) => `LOWER(${name}) Like '%${query.name}%'`),
        },
      });
    }

    if (query.code) {
      return repo.findOne({
        where: { code: query.name },
      });
    }

    if (query.id) {
      return repo.findOne(query.id);
    }

    return repo.find();
  }

  async getRegions(query?: QueryLocationDto): Promise<Region[] | Region> {
    return await this.findByQuery<Region>(this.regionRepo, query);
  }

  async getProvinces(query: QueryLocationDto): Promise<Province[] | Province> {
    return await this.findByQuery<Province>(this.provinceRepo, query);
  }

  async getMunicipalities(
    query?: QueryLocationDto,
  ): Promise<Municipality[] | Municipality> {
    return await this.findByQuery<Municipality>(this.municipalityRepo, query);
  }

  async getDistricts(query?: QueryLocationDto): Promise<District[] | District> {
    return await this.findByQuery<District>(this.districtRepo, query);
  }

  async getSections(query?: QueryLocationDto): Promise<Section[] | Section> {
    return await this.findByQuery<Section>(this.sectionRepo, query);
  }

  async getNeighborhoods(
    query?: QueryLocationDto,
  ): Promise<Neighborhood[] | Neighborhood> {
    return await this.findByQuery<Neighborhood>(this.neighborhoodRepo, query);
  }

  async getSubNeighborhoods(
    query?: QueryLocationDto,
  ): Promise<SubNeighborhood[] | SubNeighborhood> {
    return await this.findByQuery<SubNeighborhood>(
      this.subNeighborhoodRepo,
      query,
    );
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
