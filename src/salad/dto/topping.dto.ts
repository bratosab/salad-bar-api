import { IsNotEmpty, IsNumber } from 'class-validator';

export class ToppingDTO {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
