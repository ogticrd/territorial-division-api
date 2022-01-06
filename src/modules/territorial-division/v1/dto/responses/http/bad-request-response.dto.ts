import { IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

@Exclude()
class BadRequest {
  @Expose()
  @ApiProperty({ type: Number, default: HttpStatus.BAD_REQUEST })
  @IsNumber()
  statusCode: number;

  @Expose()
  @ApiProperty({ type: String })
  @IsString()
  message: string | string[];

  @Expose()
  @ApiProperty({ type: Date })
  @IsDate()
  timestamp: Date;
}

@Exclude()
@ApiTags('hi')
export class BadRequestResponseDto {
  @Expose()
  @ApiProperty({ type: Boolean, default: false })
  @IsBoolean()
  valid: boolean;

  @Expose()
  @ApiProperty({ type: BadRequest })
  @Type(() => BadRequest)
  BadRequest: BadRequest;
}
