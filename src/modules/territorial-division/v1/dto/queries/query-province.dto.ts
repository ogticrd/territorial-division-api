import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { QueryBase } from './base';

export class QueryProvinceDto extends QueryBase {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Parent region code',
  })
  regionCode: string;
}
