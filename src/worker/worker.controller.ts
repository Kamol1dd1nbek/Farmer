import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @ApiOperation({ summary: "| Find all workers" })
  @Get()
  findAllWorkers() {
    return this.workerService.findAllWorkers();
  }

  @ApiOperation({ summary: "| Find workers" })
  @Get(":id")
  findWorker(@Param("id") id: string) {
    return this.workerService.findWorker(id);
  }

  @ApiOperation({ summary: "| Delete Worker" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workerService.removeWorker(id);
  }

  @ApiOperation({ summary: "| Update Worker" })
  @Patch(":id")
  updateWorker(@Param("id") id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.updateWorker(id, updateWorkerDto);
  }
}
