import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToysService } from './toys.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiOperation } from '@nestjs/swagger';
import { ToyEntity } from './entities/toy.entity';

@Controller('toys')
export class ToysController {
  constructor(private readonly toysService: ToysService) { }

  @Post()
  @ApiOperation({
    summary: 'Létrehozás',
    description: 'Új játékot hoz létre a listába.',
  })
  @ApiOkResponse({
    description: 'Sikeres létrehozás',
    type: ToyEntity,
    isArray: true
  })
  create(@Body() createToyDto: CreateToyDto) {
    return this.toysService.create(createToyDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Játékok listázva',
    description: 'Visszaadja a játékok adatait listázva.',
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: ToyEntity,
    isArray: true
  })
  findAll() {
    return this.toysService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '1 játék adatai',
    description: 'Visszaadja egy játék adatait ID alapján.',
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: ToyEntity,
    isArray: true
  })
  @ApiParam({
    name: 'id',
    description: 'A játék egyedi ID-ja',
    type: 'number'
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: ToyEntity
  })
  @ApiNotFoundResponse({
    description: 'Nincs ilyen ID-jú játék'
  })
  findOne(@Param('id') id: string) {
    return this.toysService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Frissítés',
    description: 'Frissíti egy játék adatait ID alapján.',
  })
  @ApiOkResponse({
    description: 'Sikeres frissítés',
    type: ToyEntity,
    isArray: true
  })
  @ApiParam({
    name: 'id',
    description: 'A játék egyedi ID-ja',
    type: 'number'
  })
  update(@Param('id') id: string, @Body() updateToyDto: UpdateToyDto) {
    return this.toysService.update(+id, updateToyDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Törlés',
    description: 'Töröl egy játékot a listából.',
  })
  @ApiOkResponse({
    description: 'Sikeres törlés',
    type: ToyEntity,
    isArray: true
  })
  @ApiParam({
    name: 'id',
    description: 'A játék egyedi ID-ja',
    type: 'number'
  })
  remove(@Param('id') id: string) {
    return this.toysService.remove(+id);
  }
}
