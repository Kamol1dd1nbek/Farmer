import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HerdService } from './herd.service';
import { CreateHerdDto } from './dto/create-herd.dto';
import { UpdateHerdDto } from './dto/update-herd.dto';

@Controller('herd')
export class HerdController {
  constructor(private readonly herdService: HerdService) {}

  @Post()
  create(@Body() createHerdDto: CreateHerdDto) {
    return this.herdService.create(createHerdDto);
  }

  @Get()
  findAll() {
    return this.herdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerdDto: UpdateHerdDto) {
    return this.herdService.update(+id, updateHerdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.herdService.remove(+id);
  }
}
