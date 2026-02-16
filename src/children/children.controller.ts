import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChildrenService } from './children.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { ChildEntity } from './entities/child.entity';
import { ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiOperation } from '@nestjs/swagger';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) { }

  @Post()
  @ApiOperation({
    summary: 'Létrehozás',
    description: 'Új gyereket hoz létre a listába.',
  })
  @ApiOkResponse({
    description: 'Sikeres létrehozás',
    type: ChildEntity,
    isArray: true
  })
  create(@Body() createChildDto: CreateChildDto) {
    return this.childrenService.create(createChildDto);
  }

  @Put(':childId/toys/:toyId')
  @ApiOperation({
    summary: 'Hozzáadás',
    description: 'Új játékot ad hozzá egy gyerekhez a listába.',
  })
  @ApiOkResponse({
    description: 'Sikeres hozzáadás',
    type: ChildEntity,
    isArray: true
  })
  @ApiParam({
    name: 'childId',
    description: 'Egy gyermek egyedi ID-ja',
    type: 'number'
  })
  @ApiParam({
    name: 'toyId',
    description: 'Egy játék egyedi ID-ja',
    type: 'number'
  })
  addToyToChildren(@Param('childId') childId: string, @Param('toyId') toyId: string) {
    return this.childrenService.addToyToChildren(+childId, +toyId);
  }

  @Delete(':childId/toys/:toyId')
  @ApiOperation({
    summary: 'Játék törlése',
    description: 'Töröl egy játékot egy gyereketől.',
  })
  @ApiOkResponse({
    description: 'Sikeres törlés',
    type: ChildEntity,
    isArray: true
  })
  @ApiParam({
    name: 'childId',
    description: 'Egy gyermek egyedi ID-ja',
    type: 'number'
  })
  @ApiParam({
    name: 'toyId',
    description: 'Egy játék egyedi ID-ja',
    type: 'number'
  })
  removeToyFromChild(@Param('childId') childId: string, @Param('toyId') toyId: string) {
    return this.childrenService.removeToyFromChild(+childId, +toyId);
  }

  @Get()
  @ApiOperation({
    summary: 'Gyerekek listázva',
    description: 'Visszaadja a gyerekek adatait listázva.',
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: ChildEntity,
    isArray: true
  })
  findAll() {
    return this.childrenService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '1 Gyerek adatai',
    description: 'Visszaadja egy gyerek adatait ID alapján.',
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: ChildEntity,
    isArray: true
  })
  @ApiParam({
    name: 'id',
    description: 'A gyermek egyedi ID-ja',
    type: 'number'
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: ChildEntity
  })
  @ApiNotFoundResponse({
    description: 'Nincs ilyen ID-jú gyermek'
  })

  findOne(@Param('id') id: string) {
    return this.childrenService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Frissítés',
    description: 'Frissíti egy gyerek adatait ID alapján.',
  })
  @ApiOkResponse({
    description: 'Sikeres frissítés',
    type: ChildEntity,
    isArray: true
  })
  @ApiParam({
    name: 'id',
    description: 'A gyermek egyedi ID-ja',
    type: 'number'
  })
  update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    return this.childrenService.update(+id, updateChildDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Törlés',
    description: 'Töröl egy gyereket a listából.',
  })
  @ApiOkResponse({
    description: 'Sikeres törlés',
    type: ChildEntity,
    isArray: true
  })
  @ApiParam({
    name: 'id',
    description: 'A gyermek egyedi ID-ja',
    type: 'number'
  })
  remove(@Param('id') id: string) {
    return this.childrenService.remove(+id);
  }
}
