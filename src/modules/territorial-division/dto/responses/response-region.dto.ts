import { Exclude } from 'class-transformer';

import { ResponseBase } from './base';

@Exclude()
export class ResponseRegionDto extends ResponseBase {}
