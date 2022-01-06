import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { QueryBase } from './base';

export class QuerySectionDto extends QueryBase {
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
