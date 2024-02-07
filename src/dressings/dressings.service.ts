import { Injectable } from '@nestjs/common';

@Injectable()
export class DressingsService {
  getAll() {
    return ['Ranch', 'Cesar', 'Italian'];
  }
}
