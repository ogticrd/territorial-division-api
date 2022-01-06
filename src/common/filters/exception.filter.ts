import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let message: any = exception.message;

    if (exception.getStatus() === HttpStatus.BAD_REQUEST) {
      message = exception.getResponse()['message'];
    }

    const managedResponse = {
      sucess: false,
      data: {
        statusCode: status,
        message,
        timestamp: new Date().toISOString(),
      },
    };

    return response.status(status).json(managedResponse);
  }
}

@Catch(QueryFailedError)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch({ message }: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      message,
    });
  }
}
