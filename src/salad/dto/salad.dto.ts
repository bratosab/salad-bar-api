import { IsNotEmpty } from 'class-validator';

export class BaseSaladDto {
  username: string;
  dressing: string;
  toppings: string[];
  price: number;
}

export class CreateSaladDto extends BaseSaladDto {
  @IsNotEmpty()
  username: string;
}
export class UpdateSaladDto extends BaseSaladDto {}
