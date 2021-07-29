import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamDistrictDto {
  @IsString()
  @ApiProperty()
  regionCode: string;

  @IsString()
  @ApiProperty()
  provinceCode: string;

  @IsString()
  @ApiProperty()
  municipalityCode: string;

  @IsString()
  @ApiProperty()
  districtCode: string;
}
