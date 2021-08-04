import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamMunicipalityDto {
  @IsString()
  @ApiProperty()
  regionCode: string;

  @IsString()
  @ApiProperty()
  provinceCode: string;

  @IsString()
  @ApiProperty()
  municipalityCode: string;
}
