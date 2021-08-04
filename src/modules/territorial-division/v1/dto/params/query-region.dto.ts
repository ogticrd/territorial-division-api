import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ParamRegionDto {
  @IsString()
  @ApiProperty()
  regionCode: string;
}
