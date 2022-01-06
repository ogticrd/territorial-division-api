import { IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

@Exclude()
class NotFoundResponse {
  @Expose()
  @ApiProperty({ type: Number, default: HttpStatus.NOT_FOUND })
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
export class NotFoundResponseDto {
  @Expose()
  @ApiProperty({ type: Boolean, default: false })
  @IsBoolean()
  valid: boolean;

  @Expose()
  @ApiProperty({ type: NotFoundResponse })
  @Type(() => NotFoundResponse)
  data: NotFoundResponse;
}
