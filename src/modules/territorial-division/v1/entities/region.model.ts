import { Entity } from 'typeorm';

import { BaseModel } from './base.model';

@Entity({ name: 'regions' })
export class Region extends BaseModel {}
