import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseWrapper<T> {
  @Expose()
  valid: boolean;

  @Expose()
  payload: T;
}
