import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateToyDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  material: string;
  @IsNumber()
  @IsNotEmpty()
  weight: number;

}
