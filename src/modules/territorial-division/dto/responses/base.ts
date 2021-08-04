import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ResponseBase {
  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  name: string;

  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  code: string;

  @IsString()
  @Expose()
  @ApiProperty({ required: false })
  identifier: string;
}
