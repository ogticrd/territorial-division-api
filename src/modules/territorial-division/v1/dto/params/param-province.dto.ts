import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamProvinceDto {
  @IsString()
  @ApiProperty()
  regionCode: string;

  @IsString()
  @ApiProperty()
  provinceCode: string;
}
