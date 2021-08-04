import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * V1
 */
import { District } from './v1/entities/district.model';
import { Municipality } from './v1/entities/municipality.model';
import { Neighborhood } from './v1/entities/neighborhood.model';
import { Province } from './v1/entities/province.model';
import { Region } from './v1/entities/region.model';
import { Section } from './v1/entities/section.model';
import { SubNeighborhood } from './v1/entities/sub-neighborhood.model';
import { TerritorialDivisionV1Controller } from './v1/territorial-division-v1.controller';
import { TerritorialDivisionV1Service } from './v1/territorial-division-v1.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Region,
      Province,
      Municipality,
      District,
      Section,
      Neighborhood,
      SubNeighborhood,
    ]),
  ],
  controllers: [TerritorialDivisionV1Controller],
  providers: [TerritorialDivisionV1Service],
})
export class TerritorialDivisionModule {}
