import { Module } from '@nestjs/common';

import { DatabaseProvider } from './database.provider';

@Module({
  imports: [DatabaseProvider],
  exports: [DatabaseProvider],
})
export class DatabaseModule {}
