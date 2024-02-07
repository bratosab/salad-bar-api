import { Body, Controller, Post } from '@nestjs/common';
import { CreateSaladDto } from './dto/salad.dto';

@Controller()
export class SaladController {
  @Post()
  create(@Body() createSaladDto: CreateSaladDto) {
    console.log(createSaladDto);
    // return true;
  }

  @Post(':id/toppings')
  addToppins() {
    return 'Unimplemented : addToppins';
  }

  @Post(':id/dressings')
  addDressings() {
    return 'Unimplemented : addDressings';
  }
}
