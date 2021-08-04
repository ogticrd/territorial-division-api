import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { QueryBase } from './base';

export class QueryDistrictDto extends QueryBase {
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
