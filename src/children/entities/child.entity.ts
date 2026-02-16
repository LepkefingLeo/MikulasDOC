import { children } from "generated/prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class ChildEntity implements children {
  /**
   * A gyermek egyedi ID azonosítója
   * @example 1
   */
  @ApiProperty({
    example: '1',
    description: 'A gyermek egyedi ID azonosítója'
  })
  id: number;
  
  /**
   * A gyermek neve
   * @example Leonor Soares Henriques
   */
  @ApiProperty({
    example: 'Leonor Soares Henriques',
    description: 'A gyermek neve'
  })
  name: string;

  /**
   * A gyermek lakcíme
   * @example 4521 Silva Springs
   */
  @ApiProperty({
    example: '4521 Silva Springs',
    description: 'A gyermek lakcíme'
  })
  address: string;

  /**
  * A gyermek származási országa
  * @example Portugal
  */
  @ApiProperty({
    example: 'Portugal',
    description: 'A gyermek származási országa'
  })
  country: string;

  /**
   * A gyermek jó volt-e?
   * @example 1 (igen)
   */
  @ApiProperty({
    example: '1',
    description: 'A gyermek jó volt-e vagy sem? (1 - igen, 0 - nem)'
  })
  wasGoodOrNot: boolean;
}
