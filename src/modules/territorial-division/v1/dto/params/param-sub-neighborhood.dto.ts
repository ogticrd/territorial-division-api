import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamSubNeighborhoodDto {
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

  @IsString()
  @ApiProperty()
  neighborhoodCode: string;

  @IsString()
  @ApiProperty()
  subNeighborhoodCode: string;
}
