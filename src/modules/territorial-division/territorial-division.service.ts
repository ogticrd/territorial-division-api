import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  async getRegions(): Promise<Region[]> {
    return await this.regionRepo.find();
  }

  async getRegion(regionId: number): Promise<Region> {
    return await this.regionRepo.findOne(regionId);
  }

  async getProvinces(): Promise<Province[]> {
    return await this.provinceRepo.find();
  }

  async getProvince(provinceId: number): Promise<Province> {
    return await this.provinceRepo.findOne(provinceId);
  }

  async getMunicipalities(): Promise<Municipality[]> {
    return await this.municipalityRepo.find();
  }

  async getMunicipality(municipalityId: number): Promise<Municipality> {
    return await this.municipalityRepo.findOne(municipalityId);
  }

  async getDistrict(districtId: number): Promise<District> {
    return await this.districtRepo.findOne(districtId);
  }

  async getDistricts(): Promise<District[]> {
    return await this.districtRepo.find();
  }

  async getSection(sectionId: number): Promise<Section> {
    return await this.sectionRepo.findOne(sectionId);
  }

  async getSections(): Promise<Section[]> {
    return await this.sectionRepo.find();
  }

  async getNeighborhood(neighborhoodId: number): Promise<Neighborhood> {
    return await this.neighborhoodRepo.findOne(neighborhoodId);
  }

  async getNeighborhoods(): Promise<Neighborhood[]> {
    return await this.neighborhoodRepo.find();
  }

  async getSubNeighborhood(neighborhoodId: number): Promise<SubNeighborhood> {
    return await this.subNeighborhoodRepo.findOne(neighborhoodId);
  }

  async getSubNeighborhoods(): Promise<SubNeighborhood[]> {
    return await this.subNeighborhoodRepo.find();
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
