import { Injectable } from '@nestjs/common';

@Injectable()
export class ToppingsService {
  getAll() {
    return ['Cheese', 'Bacon', 'Omelette', 'Tomates'];
  }
}
