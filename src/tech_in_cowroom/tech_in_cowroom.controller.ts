import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechInCowroomService } from './tech_in_cowroom.service';
import { CreateTechInCowroomDto } from './dto/create-tech_in_cowroom.dto';
import { UpdateTechInCowroomDto } from './dto/update-tech_in_cowroom.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tecniques in cowrooms")
@Controller('tech-in-cowroom')
export class TechInCowroomController {
  constructor(private readonly techInCowroomService: TechInCowroomService) {}

  @ApiOperation({ summary: "| Add technique to cowroom" })
  @Post()
  create(@Body() createTechInCowroomDto: CreateTechInCowroomDto) {
    return this.techInCowroomService.create(createTechInCowroomDto);
  }

  @ApiOperation({ summary: "| Find techniqueInCowroom tables" })
  @Get()
  findAll() {
    return this.techInCowroomService.findAll();
  }

  @ApiOperation({ summary: "| Find techniqueInCowroom table" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techInCowroomService.findOne(id);
  }

  @ApiOperation({ summary: "| Update techniqueInCowroom table" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechInCowroomDto: UpdateTechInCowroomDto) {
    return this.techInCowroomService.update(id, updateTechInCowroomDto);
  }

  @ApiOperation({ summary: "| Delete techniqueInCowroom table" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techInCowroomService.remove(id);
  }
}
