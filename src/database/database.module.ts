import { Module } from '@nestjs/common';

import { PostgresProvider } from './providers';

@Module({
  imports: [PostgresProvider],
  exports: [PostgresProvider],
})
export class DatabaseModule {}
