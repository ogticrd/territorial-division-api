import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { District } from './entities/district.model';
import { Municipality } from './entities/municipality.model';
import { Neighborhood } from './entities/neighborhood.model';
import { Province } from './entities/province.model';
import { Region } from './entities/region.model';
import { Section } from './entities/section.model';
import { SubNeighborhood } from './entities/sub-neighborhood.model';
import { TerritorialDivisionController } from './territorial-division.controller';
import { TerritorialDivisionService } from './territorial-division.service';

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
  controllers: [TerritorialDivisionController],
  providers: [TerritorialDivisionService],
})
export class TerritorialDivisionModule {}
