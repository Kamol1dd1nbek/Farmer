import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCattleDto } from './dto/create-cattle.dto';
import { CattleService } from "./cattle.service";
import { UpdateCattleDto } from './dto/update-cattle.dto';

@ApiTags("Cattles")
@Controller('cattle')
export class CattleController {
  constructor(private readonly cattleService: CattleService) {}

  @ApiOperation({ summary: "| Add new cattle" })
  @Post()
  create(@Body() createCattleDto: CreateCattleDto) {
    return this.cattleService.create(createCattleDto);
  }

  @ApiOperation({ summary: "| Find all cattle" })
  @Get()
  findAll() {
    return this.cattleService.findAll();
  }

  @ApiOperation({ summary: "| Find cattle" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cattleService.findOne(id);
  }

  @ApiOperation({ summary: "| Update cattle" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCattleDto: UpdateCattleDto) {
    return this.cattleService.update(id, updateCattleDto);
  }

  @ApiOperation({ summary: "| Delete cattle" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cattleService.remove(id);
  }
}