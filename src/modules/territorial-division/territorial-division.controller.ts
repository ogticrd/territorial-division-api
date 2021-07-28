import { EnvelopInterceptor } from '@common/interceptors';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QueryLocationDto } from './dto';

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

  @Get('regions')
  getRegions(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getRegions(query);
  }

  @Get('provinces')
  getProvinces(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getProvinces(query);
  }

  @Get('municipalities')
  getMunicipalities(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getMunicipalities(query);
  }

  @Get('districts')
  getDistricts(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getDistricts(query);
  }

  @Get('sections')
  getSections(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getSections(query);
  }

  @Get('neighborhoods')
  getNeighborhoods(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getNeighborhoods(query);
  }

  @Get('sub-neighborhoods')
  getSubNeighborhoods(@Query() query?: QueryLocationDto) {
    return this.territorialDivisionService.getSubNeighborhoods(query);
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

  @Get('neighborhoods/:neighborhoodId/sub-neighborhoods')
  getNeighborhoodSubNeighborhoods(
    @Param('neighborhoodId') neighborhoodId: number,
  ) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhoods(
      neighborhoodId,
    );
  }

  @Get('neighborhoods/:neighborhoodId/sub-neighborhoods/:subNbeighborhoodId')
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
