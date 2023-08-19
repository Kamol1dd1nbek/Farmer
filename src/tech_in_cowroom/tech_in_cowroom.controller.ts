import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechInCowroomService } from './tech_in_cowroom.service';
import { CreateTechInCowroomDto } from './dto/create-tech_in_cowroom.dto';
import { UpdateTechInCowroomDto } from './dto/update-tech_in_cowroom.dto';

@Controller('tech-in-cowroom')
export class TechInCowroomController {
  constructor(private readonly techInCowroomService: TechInCowroomService) {}

  @Post()
  create(@Body() createTechInCowroomDto: CreateTechInCowroomDto) {
    return this.techInCowroomService.create(createTechInCowroomDto);
  }

  @Get()
  findAll() {
    return this.techInCowroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techInCowroomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechInCowroomDto: UpdateTechInCowroomDto) {
    return this.techInCowroomService.update(+id, updateTechInCowroomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techInCowroomService.remove(+id);
  }
}
