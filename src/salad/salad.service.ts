import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseSaladDto } from './dto/salad.dto';
import { ToppingDTO } from './dto/topping.dto';

@Injectable()
export class SaladService {
  constructor(
    @Inject('DATA')
    private readonly dataClient: ClientProxy,
  ) {}

  getAll() {
    return this.dataClient.send<BaseSaladDto>('get_salads', {});
  }

  addToppings(saladId: string, toppings: ToppingDTO[]) {
    return this.dataClient.send<BaseSaladDto>('add_toppings_salad', {
      saladId,
      toppings,
    });
  }
}
