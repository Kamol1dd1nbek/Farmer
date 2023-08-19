import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TechniqueService } from './technique.service';
import { CreateTechniqueDto } from './dto/create-technique.dto';
import { UpdateTechniqueDto } from './dto/update-technique.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Techniques")
@Controller('technique')
export class TechniqueController {
  constructor(private readonly techniqueService: TechniqueService) {}

  @ApiOperation({ summary: "| Add new Technique" })
  @Post()
  create(@Body() createTechniqueDto: CreateTechniqueDto) {
    return this.techniqueService.create(createTechniqueDto);
  }

  @ApiOperation({ summary: "| Find all techniques" })
  @Get()
  findAll() {
    return this.techniqueService.findAll();
  }

  @ApiOperation({ summary: "| Find one technique" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.techniqueService.findOne(id);
  }

  @ApiOperation({ summary: "| Update technique" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTechniqueDto: UpdateTechniqueDto) {
    return this.techniqueService.update(id, updateTechniqueDto);
  }

  @ApiOperation({ summary: "| Delete technique" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.techniqueService.remove(id);
  }
}
