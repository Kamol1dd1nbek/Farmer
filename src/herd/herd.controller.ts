import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HerdService } from './herd.service';
import { CreateHerdDto } from './dto/create-herd.dto';
import { UpdateHerdDto } from './dto/update-herd.dto';

@ApiTags('Herds')
@Controller('herd')
export class HerdController {
  constructor(private readonly herdsService: HerdService) {}

  @ApiOperation({ summary: '| Add new herd' })
  @Post()
  create(@Body() createHerdDto: CreateHerdDto) {
    return this.herdsService.create(createHerdDto);
  }

  @ApiOperation({ summary: '| Find all herds' })
  @Get()
  findAll() {
    return this.herdsService.findAll();
  }

  @ApiOperation({ summary: '| Find herd' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.herdsService.findOne(id);
  }

  @ApiOperation({ summary: '| Update herd' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHerdDto: UpdateHerdDto) {
    return this.herdsService.update(id, updateHerdDto);
  }

  @ApiOperation({ summary: '| Delete herd' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.herdsService.remove(id);
  }
}
