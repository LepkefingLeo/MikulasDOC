import { toys } from "generated/prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class ToyEntity implements toys {
  /**
   * A játék egyedi ID azonosítója
   * @example 1
   */
  @ApiProperty({
    example: '1',
    description: 'A játék egyedi ID azonosítója'
  })
  id: number;
  
  /**
   * A játék neve
   * @example LEGO
   */
  @ApiProperty({
    example: 'LEGO',
    description: 'A játék neve'
  })
  name: string;

  /**
   * A játék anyaga
   * @example plastic
   */
  @ApiProperty({
    example: 'plastic',
    description: 'A játék anyaga'
  })
  material: string; 

  /**
  * A játék súlya (kg)
  * @example 1
  */
  @ApiProperty({
    example: '1',
    description: 'A játék súlya (kg)'
  })
  weight: number;
}
