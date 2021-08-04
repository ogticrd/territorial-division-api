import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

import { ResponseBase } from './base';

@Exclude()
export class ResponseSubNeighborhoodDto extends ResponseBase {
  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  neighborhoodCode: string;

  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  sectionCode: string;

  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  districtCode: string;

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
