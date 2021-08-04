import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamSectionDto {
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

  @IsString()
  @ApiProperty()
  sectionCode: string;
}
