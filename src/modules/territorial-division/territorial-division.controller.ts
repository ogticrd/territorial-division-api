import { EnvelopInterceptor } from '@common/interceptors';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

import {
  District,
  Municipality,
  Neighborhood,
  Province,
  Section,
  SubNeighborhood,
} from './entities';
import { TerritorialDivisionService } from './territorial-division.service';

@Controller('territories')
@ApiTags('Territorial Division')
@UseInterceptors(EnvelopInterceptor)
export class TerritorialDivisionController {
  constructor(
    private readonly territorialDivisionService: TerritorialDivisionService,
  ) {}

  @ApiQuery({
    name: 'name',
    required: false,
  })
  @ApiQuery({
    name: 'id',
    required: false,
  })
  @ApiQuery({
    name: 'code',
    required: false,
  })
  @Get('regions')
  getRegions(
    @Query('name') name?: string,
    @Query('id') id?: number,
    @Query('code') code?: string,
  ) {
    return this.territorialDivisionService.getRegions(name, code, id);
  }

  //   @Get('regions/:regionId')
  //   getRegion(@Param('regionId') regionId: number) {
  //     return this.territorialDivisionService.getRegion(regionId);
  //   }

  @Get('provinces')
  getProvinces() {
    return this.territorialDivisionService.getProvinces();
  }

  @Get('provinces/:provinceId')
  getProvince(provinceId: number): Promise<Province> {
    return this.territorialDivisionService.getProvince(provinceId);
  }

  @Get('municipalities')
  getMunicipalities(): Promise<Municipality[]> {
    return this.territorialDivisionService.getMunicipalities();
  }

  @Get('municipalities/:municipalityId')
  getMunicipality(municipalityId: number): Promise<Municipality> {
    return this.territorialDivisionService.getMunicipality(municipalityId);
  }

  @Get('districts/:districtId')
  getDistrict(districtId: number): Promise<District> {
    return this.territorialDivisionService.getDistrict(districtId);
  }

  @Get('districts')
  getDistricts(): Promise<District[]> {
    return this.territorialDivisionService.getDistricts();
  }

  @Get('sections/:sectionId')
  getSection(sectionId: number): Promise<Section> {
    return this.territorialDivisionService.getSection(sectionId);
  }

  @Get('sections')
  getSections(): Promise<Section[]> {
    return this.territorialDivisionService.getSections();
  }

  @Get('neighborhoods/:neighborhoodId')
  getNeighborhood(neighborhoodId: number): Promise<Neighborhood> {
    return this.territorialDivisionService.getNeighborhood(neighborhoodId);
  }

  @Get('neighborhoods')
  getNeighborhoods(): Promise<Neighborhood[]> {
    return this.territorialDivisionService.getNeighborhoods();
  }

  @Get('subneighborhoods/:subneighborhoodId')
  getSubNeighborhood(neighborhoodId: number): Promise<SubNeighborhood> {
    return this.territorialDivisionService.getSubNeighborhood(neighborhoodId);
  }

  @Get('subneighborhoods')
  getSubNeighborhoods(): Promise<SubNeighborhood[]> {
    return this.territorialDivisionService.getSubNeighborhoods();
  }

  @Get('regions/:regionId/provinces')
  getRegionProvinces(@Param('regionId') regionId: number) {
    return this.territorialDivisionService.getRegionProvinces(regionId);
  }

  @Get('regions/:regionId/provinces/:provinceId')
  getRegionProvince(
    @Param('regionId') regionId: number,
    @Param('provinceId') provinceId: number,
  ) {
    return this.territorialDivisionService.getRegionProvince(
      regionId,
      provinceId,
    );
  }

  @Get('provinces/:provinceId/municipalities')
  getProvinceMunicipalities(@Param('provinceId') provinceId: number) {
    return this.territorialDivisionService.getProvinceMunicipalities(
      provinceId,
    );
  }

  @Get('provinces/:provinceId/municipalities/:municipalityId')
  getProvinceMunicipality(
    @Param('provinceId') provinceId: number,
    @Param('municipalityId') municipalityId: number,
  ) {
    return this.territorialDivisionService.getProvinceMunicipality(
      provinceId,
      municipalityId,
    );
  }

  @Get('municipalities/:municipalityId/districts')
  getMunicipalityDistricts(@Param('municipalityId') municipalityId: number) {
    return this.territorialDivisionService.getMunicipalityDistricts(
      municipalityId,
    );
  }

  @Get('municipalities/:municipalityId/districts/:districtId')
  getMunicipalityDistrict(
    @Param('municipalityId') municipalityId: number,
    @Param('districtId') districtId: number,
  ) {
    return this.territorialDivisionService.getMunicipalityDistrict(
      municipalityId,
      districtId,
    );
  }

  @Get('districts/:districtId/sections')
  getDisctrictSections(@Param('districtId') districtId: number) {
    return this.territorialDivisionService.getDisctrictSections(districtId);
  }

  @Get('districts/:districtId/sections/:sectionId')
  getDisctrictSection(
    @Param('districtId') districtId: number,
    @Param('sectionId') sectionId: number,
  ) {
    return this.territorialDivisionService.getDistrictSection(
      districtId,
      sectionId,
    );
  }

  @Get('sections/:sectionId/neighborhoods')
  getSectionNeighborhoods(@Param('sectionId') sectionId: number) {
    return this.territorialDivisionService.getSectionNeighborhoods(sectionId);
  }

  @Get('sections/:sectionId/neighborhoods/:neighborhoodId')
  getSectionNeighborhood(
    @Param('sectionId') sectionId: number,
    @Param('neighborhoodId') neighborhoodId: number,
  ) {
    return this.territorialDivisionService.getSectionNeighborhood(
      sectionId,
      neighborhoodId,
    );
  }

  @Get('neighborhoods/:neighborhoodId/subNeighborhoods')
  getNeighborhoodSubNeighborhoods(
    @Param('neighborhoodId') neighborhoodId: number,
  ) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhoods(
      neighborhoodId,
    );
  }

  @Get('neighborhoods/:neighborhoodId/subNeighborhoods/:subNeighborhoodId')
  getNeighborhoodSubNeighborhood(
    @Param('neighborhoodId') neighborhoodId: number,
    @Param('subNeighborhoodId') subNeighborhoodId: number,
  ) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhood(
      neighborhoodId,
      subNeighborhoodId,
    );
  }
}
function ApiImplicitQuery(arg0: {
  name: string;
  description: string;
  required: boolean;
  type: NumberConstructor;
}) {
  throw new Error('Function not implemented.');
}
