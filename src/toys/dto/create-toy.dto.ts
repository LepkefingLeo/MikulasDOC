import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateToyDto {
  /**
   * A játek neve
   * @example LEGO
   */

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
      example: 'LEGO',
      description: 'A játék neve'
  })
  name: string;

  /**
   * A játék anyaga
   * @example plastic
   */

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
      example: 'plastic',
      description: 'A játék anyaga'
  })
  material: string;
  
  /**
   * A játék súlya (kg)
   * @example 1
   */

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
      example: '1',
      description: 'A játék súlya (kg)'
  })
  weight: number; 

}
