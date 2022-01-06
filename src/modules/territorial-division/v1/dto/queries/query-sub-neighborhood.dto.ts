import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { QueryBase } from './base';

export class QuerySubNeighborhoodDto extends QueryBase {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent neighborhood code',
  })
  neighborhoodCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent section code',
  })
  sectionCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent district code',
  })
  districtCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent municipality code',
  })
  municipalityCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent province code',
  })
  provinceCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent region code',
  })
  regionCode: string;
}
