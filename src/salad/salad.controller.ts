import {
  Body,
  Controller,
  Param,
  ParseArrayPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSaladDto } from './dto/salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';

@Controller()
export class SaladController {
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createSaladDto: CreateSaladDto) {
    console.log(createSaladDto);
  }

  @Post(':id/toppings')
  addToppings(
    @Param('id') saladId: number,
    @Body(
      new ParseArrayPipe({
        items: ToppingDTO,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    toppings: ToppingDTO[],
  ) {
    console.log(saladId);
    console.log(toppings);
  }

  @Post(':id/dressing')
  addDressing(@Param('id') saladId: string, @Body() dressing: DressingDTO) {
    console.log(saladId);
    console.log(dressing);
  }
}
