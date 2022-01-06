import { EnvelopInterceptor, TransformInterceptor } from '@common/interceptors';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

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
import {
  BadRequestResponseDto,
  NotFoundResponseDto,
} from './dto/responses/http';
import { TerritorialDivisionV1Service } from './territorial-division-v1.service';

@Controller({
  path: 'territories',
  version: '1',
})
@ApiTags('Territorial divisions')
@UseInterceptors(EnvelopInterceptor)
export class TerritorialDivisionV1Controller {
  constructor(
    private readonly territorialDivisionService: TerritorialDivisionV1Service,
  ) {}

  @Get('regions')
  @UseInterceptors(new TransformInterceptor(ResponseRegionDto))
  @ApiOkResponse({ type: ResponseRegionDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getRegions(@Query() query?: QueryRegionDto) {
    return this.territorialDivisionService.getRegions(query);
  }

  @Get('provinces')
  @UseInterceptors(new TransformInterceptor(ResponseProvinceDto))
  @ApiOkResponse({ type: ResponseProvinceDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getProvinces(@Query() query?: QueryProvinceDto) {
    return this.territorialDivisionService.getProvinces(query);
  }

  @Get('municipalities')
  @UseInterceptors(new TransformInterceptor(ResponseMunicipalityDto))
  @ApiOkResponse({ type: ResponseMunicipalityDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getMunicipalities(@Query() query?: QueryMunicipalityDto) {
    return this.territorialDivisionService.getMunicipalities(query);
  }

  @Get('districts')
  @UseInterceptors(new TransformInterceptor(ResponseDistrictDto))
  @ApiOkResponse({ type: ResponseDistrictDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getDistricts(@Query() query?: QueryDistrictDto) {
    return this.territorialDivisionService.getDistricts(query);
  }

  @Get('sections')
  @UseInterceptors(new TransformInterceptor(ResponseSectionDto))
  @ApiOkResponse({ type: ResponseSectionDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getSections(@Query() query?: QuerySectionDto) {
    return this.territorialDivisionService.getSections(query);
  }

  @Get('neighborhoods')
  @UseInterceptors(new TransformInterceptor(ResponseNeighborhoodDto))
  @ApiOkResponse({ type: ResponseNeighborhoodDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getNeighborhoods(@Query() query?: QueryNeighborhoodDto) {
    return this.territorialDivisionService.getNeighborhoods(query);
  }

  @Get('sub-neighborhoods')
  @UseInterceptors(new TransformInterceptor(ResponseSubNeighborhoodDto))
  @ApiOkResponse({ type: ResponseSubNeighborhoodDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getSubNeighborhoods(@Query() query?: QuerySubNeighborhoodDto) {
    return this.territorialDivisionService.getSubNeighborhoods(query);
  }

  @Get('regions/:regionCode/provinces')
  @UseInterceptors(new TransformInterceptor(ResponseProvinceDto))
  @ApiOkResponse({ type: ResponseProvinceDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getRegionProvinces(@Param() params: ParamRegionDto) {
    return this.territorialDivisionService.getRegionProvinces(params);
  }

  @Get('regions/:regionCode/provinces/:provinceCode')
  @UseInterceptors(new TransformInterceptor(ResponseProvinceDto))
  @ApiOkResponse({ type: ResponseProvinceDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getRegionProvince(@Param() params: ParamProvinceDto) {
    return this.territorialDivisionService.getRegionProvince(params);
  }

  @Get('regions/:regionCode/provinces/:provinceCode/municipalities')
  @UseInterceptors(new TransformInterceptor(ResponseMunicipalityDto))
  @ApiOkResponse({ type: ResponseMunicipalityDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getProvinceMunicipalities(@Param() params: ParamProvinceDto) {
    return this.territorialDivisionService.getProvinceMunicipalities(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseMunicipalityDto))
  @ApiOkResponse({ type: ResponseMunicipalityDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getProvinceMunicipality(@Param() params: ParamMunicipalityDto) {
    return this.territorialDivisionService.getProvinceMunicipality(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts',
  )
  @UseInterceptors(new TransformInterceptor(ResponseDistrictDto))
  @ApiOkResponse({ type: ResponseDistrictDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getMunicipalityDistricts(@Param() params: ParamMunicipalityDto) {
    return this.territorialDivisionService.getMunicipalityDistricts(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseDistrictDto))
  @ApiOkResponse({ type: ResponseDistrictDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getMunicipalityDistrict(@Param() params: ParamDistrictDto) {
    return this.territorialDivisionService.getMunicipalityDistrict(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSectionDto))
  @ApiOkResponse({ type: ResponseSectionDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getDisctrictSections(@Param() params: ParamDistrictDto) {
    return this.territorialDivisionService.getDisctrictSections(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSectionDto))
  @ApiOkResponse({ type: ResponseSectionDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getDisctrictSection(@Param() params: ParamSectionDto) {
    return this.territorialDivisionService.getDistrictSection(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods',
  )
  @UseInterceptors(new TransformInterceptor(ResponseNeighborhoodDto))
  @ApiOkResponse({ type: ResponseNeighborhoodDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getSectionNeighborhoods(@Param() params: ParamSectionDto) {
    return this.territorialDivisionService.getSectionNeighborhoods(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods/:neighborhoodCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseNeighborhoodDto))
  @ApiOkResponse({ type: ResponseNeighborhoodDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getSectionNeighborhood(@Param() params: ParamNeighborhoodDto) {
    return this.territorialDivisionService.getSectionNeighborhood(params);
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods/:neighborhoodCode/sub-neighborhoods',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSubNeighborhoodDto))
  @ApiOkResponse({ type: ResponseSubNeighborhoodDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getNeighborhoodSubNeighborhoods(@Param() params: ParamNeighborhoodDto) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhoods(
      params,
    );
  }

  @Get(
    'regions/:regionCode/provinces/:provinceCode/municipalities/:municipalityCode/districts/:districtCode/sections/:sectionCode/neighborhoods/:neighborhoodCode/sub-neighborhoods/:subNbeighborhoodCode',
  )
  @UseInterceptors(new TransformInterceptor(ResponseSubNeighborhoodDto))
  @ApiOkResponse({ type: ResponseSubNeighborhoodDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  getNeighborhoodSubNeighborhood(@Param() params: ParamSubNeighborhoodDto) {
    return this.territorialDivisionService.getNeighborhoodSubNeighborhood(
      params,
    );
  }

  @Get('hierarchy/:code')
  getTerritorialHierarchy(@Param('code') code: string) {
    return this.territorialDivisionService.getTerritorialHierarchy(code);
  }
}
