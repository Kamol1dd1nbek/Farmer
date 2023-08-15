import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CowroomService } from './cowroom.service';
import { CreateCowroomDto } from './dto/create-cowroom.dto';
import { UpdateCowroomDto } from './dto/update-cowroom.dto';

@Controller('cowroom')
export class CowroomController {
  constructor(private readonly cowroomService: CowroomService) {}

  @Post()
  create(@Body() createCowroomDto: CreateCowroomDto) {
    return this.cowroomService.create(createCowroomDto);
  }

  @Get()
  findAll() {
    return this.cowroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cowroomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCowroomDto: UpdateCowroomDto) {
    return this.cowroomService.update(+id, updateCowroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cowroomService.remove(+id);
  }
}
