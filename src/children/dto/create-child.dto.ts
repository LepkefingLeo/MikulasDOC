import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateChildDto {
  /**
   * A gyermek neve
   * @example Leonor Soares Henriques
   */

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Leonor Soares Henriques',
    description: 'A gyermek neve'
  })
  name: string;

  /**
   * A gyermek lakcíme
   * @example 4521 Silva Springs
   */

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '4521 Silva Springs',
    description: 'A gyermek lakcíme'
  })
  address: string;

  /**
   * A gyermek származási országa
   * @example Portugal
   */

  @IsString()
  @ApiProperty({
    example: 'Portugal',
    description: 'A gyermek származási országa'
  })
  country: string;

  /**
   * A gyermek jó volt-e vagy sem? (1 - igen, 0 - nem)
   * @example 1
   */
  
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    description: 'A gyermek jó volt-e vagy sem? (1 - igen, 0 - nem)'
  })
  wasGoodOrNot: boolean;
}
