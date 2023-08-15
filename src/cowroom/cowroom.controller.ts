import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CowroomService } from './cowroom.service';
import { CreateCowroomDto } from './dto/create-cowroom.dto';
import { UpdateCowroomDto } from './dto/update-cowroom.dto';

@ApiTags("Cowroom")
@Controller('cowroom')
export class CowroomController {
  constructor(private readonly cowroomService: CowroomService) {}

  @ApiOperation({ summary: "| Add new cowroom type" })
  @Post()
  create(@Body() createCowroomDto: CreateCowroomDto) {
    return this.cowroomService.create(createCowroomDto);
  }

  @ApiOperation({ summary: "| Find all cowroom types" })
  @Get()
  findAll() {
    return this.cowroomService.findAll();
  }

  @ApiOperation({ summary: "| Find cowroom type" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cowroomService.findOne(id);
  }

  @ApiOperation({ summary: "| Update cowroom type" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCowroomDto: UpdateCowroomDto) {
    return this.cowroomService.update(id, updateCowroomDto);
  }

  @ApiOperation({ summary: "| Delete cowroom type" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cowroomService.remove(id);
  }
}