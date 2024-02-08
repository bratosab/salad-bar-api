import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSaladDto } from './dto/salad.dto';
import { DressingDTO } from './dto/dressing.dto';
import { ToppingDTO } from './dto/topping.dto';
import { SaladService } from './salad.service';

@Controller()
export class SaladController {
  constructor(private readonly saladService: SaladService) {}

  @Get()
  getAll() {
    return this.saladService.getAll();
  }

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
    return this.saladService.addToppings(saladId, toppings);
  }

  @Post(':id/dressing')
  addDressing(@Param('id') saladId: string, @Body() dressing: DressingDTO) {
    console.log(saladId);
    console.log(dressing);
  }
}
