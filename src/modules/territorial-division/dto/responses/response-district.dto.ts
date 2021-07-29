import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

import { ResponseBase } from './base';

@Exclude()
export class ResponseDistrictDto extends ResponseBase {
  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  municipalityCode: string;

  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  provinceCode: string;

  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  regionCode: string;
}
