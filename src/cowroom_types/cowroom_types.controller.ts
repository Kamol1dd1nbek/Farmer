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
import { CowroomType } from './schemas/cowroom_type.schema';
import { CreateCowroomTypeDto } from './dto/create-cowroom_type.dto';
import { UpdateCowroomTypeDto } from './dto/update-cowroom_type.dto';
import { CowroomTypesService } from './cowroom_types.service';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('Cowroom Types')
@Controller('cowroom-types')
export class CowroomsTypesController {
  constructor(private readonly cowroomTypesService: CowroomTypesService) {}

  @ApiOperation({ summary: '| Add new cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createCowroomDto: CreateCowroomTypeDto) {
    return this.cowroomTypesService.create(createCowroomDto);
  }

  @ApiOperation({ summary: '| Find all cowroom types' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.cowroomTypesService.findAll();
  }

  @ApiOperation({ summary: '| Find cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cowroomTypesService.findOne(id);
  }

  @ApiOperation({ summary: '| Update cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCowroomDto: UpdateCowroomTypeDto,
  ) {
    return this.cowroomTypesService.update(id, updateCowroomDto);
  }

  @ApiOperation({ summary: '| Delete cowroom type' })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cowroomTypesService.remove(id);
  }
}
