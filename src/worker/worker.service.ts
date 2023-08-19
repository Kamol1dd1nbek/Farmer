import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Worker } from "./schemas/worker.schema";
import * as bcrypt from "bcrypt";

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker.name) private readonly workerModel: Model<Worker>) {}

  // FIND ALL WORKERS
  async findAllWorkers(): Promise<Worker[]> {
    const workers = await this.workerModel.find({});

    if ( !workers ) {
      throw new NotFoundException("Workers not found");
    }

    return workers;
  }

  // FIND WORKER
  async findWorker(id: string): Promise<Worker> {
    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const worker = await this.workerModel.findById(id);

    if ( !worker ) {
      throw new NotFoundException(`Worker not found with id: ${id}`);
    }

    return worker;
  }

  // UPDATE WORKER'S DATA
  async updateWorker(id: string, updateWorkerDto: UpdateWorkerDto) {
    const worker = await this.workerModel.findById(id);
    if (!worker) {
      throw new BadRequestException('Worker not found');
    }

    this.workerModel.findByIdAndUpdate(id, {...updateWorkerDto})
    if (updateWorkerDto.password) {
      const hashed_password = await bcrypt.hash(updateWorkerDto.password, 7);
      worker.hashed_password = hashed_password;
    }
    await worker.save();
    return {
      message: 'Successfully updated',
      statusCode: 204,
    };
  }

  // REMOVE WORKER
  async removeWorker(id: string) {
    await this.workerModel.findByIdAndRemove(id);
    return {
      message: "Worker successfully deleted",
      id
    }
  }
}
