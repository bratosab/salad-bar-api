import { IsNotEmpty, IsNumber } from "class-validator";

export class DressingDTO {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
