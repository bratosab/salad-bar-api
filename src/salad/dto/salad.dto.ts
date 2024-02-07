export class BaseSaladDto {
  username: string;
  dressing: string;
  toppings: string[];
  price: number;
}

export class CreateSaladDto extends BaseSaladDto {}
export class UpdateSaladDto extends BaseSaladDto {}
