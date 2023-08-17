import { Injectable } from '@nestjs/common';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Worker } from "./schemas/worker.schema";

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker.name) private readonly workerModel: Model<Worker>) {}

  findAll() {
    return `This action returns all worker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
