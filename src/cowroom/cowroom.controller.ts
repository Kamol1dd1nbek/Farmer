import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CowroomService } from './cowroom.service';
import { CreateCowroomDto } from './dto/create-cowroom.dto';
import { UpdateCowroomDto } from './dto/update-cowroom.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';

@ApiTags('Cowroom')
@Controller('cowroom')
export class CowroomController {
  constructor(private readonly cowroomService: CowroomService) {}

  @ApiOperation({ summary: '| Add new cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createCowroomDto: CreateCowroomDto) {
    return this.cowroomService.create(createCowroomDto);
  }

  @ApiOperation({ summary: '| Find all cowroom types' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.cowroomService.findAll();
  }

  @ApiOperation({ summary: '| Find cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cowroomService.findOne(id);
  }

  @ApiOperation({ summary: '| Update cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCowroomDto: UpdateCowroomDto) {
    return this.cowroomService.update(id, updateCowroomDto);
  }

  @ApiOperation({ summary: '| Delete cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cowroomService.remove(id);
  }
}
