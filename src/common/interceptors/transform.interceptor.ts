import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  new (): T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<Partial<T>, T> {
  constructor(private readonly classType: Response<T>) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<Partial<T>>,
  ): Observable<T> {
    return next.handle().pipe(
      map((data: T) => {
        const response = plainToClass(this.classType, data);

        if (!this.isValidTransformation(response) || data['statusCode']) {
          return data;
        }

        return response;
      }),
    );
  }

  isValidTransformation(value: T) {
    const keys = Object.keys(value);
    const validations = keys.map((k) => value[k] !== undefined);

    return validations.includes(true);
  }
}
