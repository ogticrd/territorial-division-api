import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DatabaseModule } from '@database/database.module';
import { TerritorialDivisionModule } from '@modules/territorial-division/territorial-division.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    TerritorialDivisionModule,
  ],
})
export class AppModule {
  static port: number;
  static apiVersion: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
    AppModule.apiVersion = this.configService.get('API_VERSION');
  }
}
