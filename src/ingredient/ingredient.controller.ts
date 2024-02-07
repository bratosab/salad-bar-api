import { Controller, Get } from '@nestjs/common';
import { ToppingsService } from '../toppings/toppings.service';
import { DressingsService } from '../dressings/dressings.service';

@Controller()
export class IngredientController {
  constructor(
    private readonly toppingsService: ToppingsService,
    private readonly dressingsService: DressingsService,
  ) {}

  @Get('toppings')
  getToppings() {
    return this.toppingsService.getAll();
  }

  @Get('dressings')
  getDressings() {
    return this.dressingsService.getAll();
  }
}
