import { Repository } from 'typeorm';

import { QueryBase } from '../dto/queries/base';

export interface QueryStrategy<T, K extends QueryBase> {
  find(query: K, repository: Repository<T>): Promise<T | T[]>;
}
