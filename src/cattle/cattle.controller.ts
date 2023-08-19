import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCattleDto } from './dto/create-cattle.dto';
import { CattleService } from "./cattle.service";
import { UpdateCattleDto } from './dto/update-cattle.dto';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags("Cattles")
@Controller('cattle')
export class CattleController {
  constructor(private readonly cattleService: CattleService) {}

  @ApiOperation({ summary: "| Add new cattle" })
  @Roles("ADMIN", "LIVESTOCK KEEPER")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createCattleDto: CreateCattleDto) {
    return this.cattleService.create(createCattleDto);
  }

  @ApiOperation({ summary: "| Find all cattle" })
  @Roles("ADMIN", "LIVESTOCK KEEPER")
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.cattleService.findAll();
  }

  @ApiOperation({ summary: "| Find cattle" })
  @Roles("ADMIN", "LIVESTOCK KEEPER")
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cattleService.findOne(id);
  }

  @ApiOperation({ summary: "| Update cattle" })
  @Roles("ADMIN", "LIVESTOCK KEEPER")
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCattleDto: UpdateCattleDto) {
    return this.cattleService.update(id, updateCattleDto);
  }

  @ApiOperation({ summary: "| Delete cattle" })
  @Roles("ADMIN", "LIVESTOCK KEEPER")
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cattleService.remove(id);
  }
}