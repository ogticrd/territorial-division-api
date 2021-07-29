import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { QueryBase } from './base';

export class QuerySubNeighborhoodDto extends QueryBase {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  neighborhoodCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  sectionCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  districtCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  municipalityCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  provinceCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  regionCode: string;
}
