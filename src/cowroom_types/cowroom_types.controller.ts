import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CowroomTypesService } from './cowroom_types.service';
import { CreateCowroomTypeDto } from './dto/create-cowroom_type.dto';
import { UpdateCowroomTypeDto } from './dto/update-cowroom_type.dto';

@Controller('cowroom-types')
export class CowroomTypesController {
  constructor(private readonly cowroomTypesService: CowroomTypesService) {}

  @Post()
  create(@Body() createCowroomTypeDto: CreateCowroomTypeDto) {
    return this.cowroomTypesService.create(createCowroomTypeDto);
  }

  @Get()
  findAll() {
    return this.cowroomTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cowroomTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCowroomTypeDto: UpdateCowroomTypeDto) {
    return this.cowroomTypesService.update(+id, updateCowroomTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cowroomTypesService.remove(+id);
  }
}
