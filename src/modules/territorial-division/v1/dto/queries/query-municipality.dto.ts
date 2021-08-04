import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { QueryBase } from './base';

export class QueryMunicipalityDto extends QueryBase {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  provinceCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  regionCode: string;
}
