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
import { WorkerService } from './worker.service';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags('Worker')
@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @ApiOperation({ summary: '| Find all workers' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  findAllWorkers() {
    return this.workerService.findAllWorkers();
  }

  @ApiOperation({ summary: '| Find workers' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get(':id')
  findWorker(@Param('id') id: string) {
    return this.workerService.findWorker(id);
  }

  @ApiOperation({ summary: '| Delete Worker' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workerService.removeWorker(id);
  }

  @ApiOperation({ summary: '| Update Worker' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Patch(':id')
  updateWorker(
    @Param('id') id: string,
    @Body() updateWorkerDto: UpdateWorkerDto,
  ) {
    return this.workerService.updateWorker(id, updateWorkerDto);
  }
}
