import { EnvelopInterceptor, TransformInterceptor } from '@common/interceptors';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

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
  ResponseDistrictDto,
  ResponseMunicipalityDto,
  ResponseNeighborhoodDto,
  ResponseProvinceDto,
  ResponseRegionDto,
  ResponseSectionDto,
  ResponseSubNeighborhoodDto,
} from './dto';
import { TerritorialDivisionService } from './territorial-division.service';

@Controller({
  path: 'territories',
  version: '1',
})
@ApiTags('Territorial Division')
@UseInterceptors(EnvelopInterceptor)
export class TerritorialDivisionController {
  constructor(
    private readonly territorialDivisionService: TerritorialDivisionService,
  ) {}

  @Get('regions')
  @UseInterceptors(new TransformInterceptor(ResponseRegionDto))
  getRegions(@Query() query?: QueryRegionDto) {
    return this.territorialDivisionService.getRegions(query);
  }

  @Get('provinces')
  @UseInterceptors(new TransformInterceptor(ResponseProvinceDto))
  getProvinces(@Query() query?: QueryProvinceDto) {
    return this.territorialDivisionService.getProvinces(query);
  }

  @Get('municipalities')
  @UseInterceptors(new TransformInterceptor(ResponseMunicipalityDto))
  getMunicipalities(@Query() query?: QueryMunicipalityDto) {
    return this.territorialDivisionService.getMunicipalities(query);
  }

  @Get('districts')
  @UseInterceptors(new TransformInterceptor(ResponseDistrictDto))
  getDistricts(@Query() query?: QueryDistrictDto) {
    return this.territorialDivisionService.getDistricts(query);
  }

  @Get('sections')
  @UseInterceptors(new TransformInterceptor(ResponseSectionDto))
  getSections(@Query() query?: QuerySectionDto) {
    return this.territorialDivisionService.getSections(query);
  }

  @Get('neighborhoods')
  @UseInterceptors(new TransformInterceptor(ResponseNeighborhoodDto))
  getNeighborhoods(@Query() query?: QueryNeighborhoodDto) {
    return this.territorialDivisionService.getNeighborhoods(query);
  }

  @Get('sub-neighborhoods')
  @UseInterceptors(new TransformInterceptor(ResponseSubNeighborhoodDto))
  getSubNeighborhoods(@Query() query?: QuerySubNeighborhoodDto) {
    return this.territorialDivisionService.getSubNeighborhoods(query);
  }

  @Get('regions/:regionCode/provinces')
  @UseInterceptors(new TransformInterceptor(ResponseProvinceDto))
  getRegionProvinces(@Param() params: ParamRegionDto) {
    return this.territorialDivisionService.getRegionProvinces(params);
  }

  @Get('regions/:regionCode/provinces/:provinceCode')
  @UseInterceptors(new TransformInterceptor(ResponseProvinceDto))
  getRegionProvince(@Param() params: ParamProvinceDto) {
    return this.territorialDivisionService.getRegionProvince(params);
  }

  @Get('regions/:regionCode/provinces/:provinceCode/municipalities')
  @UseInterceptors(new TransformInterceptor(ResponseMunicipalityDto))
  getProvinceMunicipalities(@Param() params: ParamProvinceDto) {
    return this.territorialDivisionService.getProvinceMunicipalities(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseMunicipalityDto))
  getProvinceMunicipality(@Param() params: ParamMunicipalityDto) {
    return this.territorialDivisionService.getProvinceMunicipality(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts',
  )
  @UseInterceptors(new TransformInterceptor(ResponseDistrictDto))
  getMunicipalityDistricts(@Param() params: ParamMunicipalityDto) {
    return this.territorialDivisionService.getMunicipalityDistricts(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseDistrictDto))
  getMunicipalityDistrict(@Param() params: ParamDistrictDto) {
    return this.territorialDivisionService.getMunicipalityDistrict(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSectionDto))
  getDisctrictSections(@Param() params: ParamDistrictDto) {
    return this.territorialDivisionService.getDisctrictSections(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSectionDto))
  getDisctrictSection(@Param() params: ParamSectionDto) {
    return this.territorialDivisionService.getDistrictSection(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods',
  )
  @UseInterceptors(new TransformInterceptor(ResponseNeighborhoodDto))
  getSectionNeighborhoods(@Param() params: ParamSectionDto) {
    return this.territorialDivisionService.getSectionNeighborhoods(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods/:neighborhoodCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseNeighborhoodDto))
  getSectionNeighborhood(@Param() params: ParamNeighborhoodDto) {
    return this.territorialDivisionService.getSectionNeighborhood(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods/:neighborhoodCode/sub-neighborhoods',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSubNeighborhoodDto))
  getNeighborhoodSubNeighborhoods(@Param() params: ParamNeighborhoodDto) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhoods(
      params,
    );
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods/:neighborhoodCode/sub-neighborhoods/:subNbeighborhoodCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSubNeighborhoodDto))
  getNeighborhoodSubNeighborhood(@Param() params: ParamSubNeighborhoodDto) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhood(
      params,
    );
  }
}
