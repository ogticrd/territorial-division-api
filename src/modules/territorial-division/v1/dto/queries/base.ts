import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryBase {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Name of the territorial division',
    example: 'La Altagracia',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Code of the territorial division',
    example: '01',
  })
  code: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    type: String,
    description: 'Identifier of the territorial division',
    example: '0101',
  })
  identifier: string;
}
