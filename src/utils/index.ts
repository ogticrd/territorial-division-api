import { NotFoundException } from '@nestjs/common';

export class Utilities {
  static handleResponse<T>(data: T[]) {
    if (!data.length) {
      throw new NotFoundException({
        valid: false,
        message: `Entity not found`,
      });
    }

    return data.length === 1 ? data[0] : data;
  }
}
