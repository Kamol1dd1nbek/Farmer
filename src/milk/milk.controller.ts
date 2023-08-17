import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MilkService } from './milk.service';
import { CreateMilkDto } from './dto/create-milk.dto';
import { UpdateMilkDto } from './dto/update-milk.dto';

@Controller('milk')
export class MilkController {
  constructor(private readonly milkService: MilkService) {}

  @Post()
  create(@Body() createMilkDto: CreateMilkDto) {
    return this.milkService.create(createMilkDto);
  }

  @Get()
  findAll() {
    return this.milkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMilkDto: UpdateMilkDto) {
    return this.milkService.update(+id, updateMilkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milkService.remove(+id);
  }
}
