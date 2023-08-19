import { Injectable } from '@nestjs/common';
import { CreateMilkDto } from './dto/create-milk.dto';
import { UpdateMilkDto } from './dto/update-milk.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Milk } from './schemas/milk.schema';
import { Model } from 'mongoose';

@Injectable()
export class MilkService {
  constructor(@InjectModel(Milk.name) private readonly milkModel: Model<Milk>) {}

  create(createMilkDto: CreateMilkDto) {
    return this.milkModel.create(createMilkDto);
  }

  findAll() {
    return this.milkModel.find({}).populate("cattle_id").populate("tech_worker_id");
  }

  findOne(id: string) {
    return this.milkModel.findOne({ _id: id });
  }

  update(id: string, updateMilkDto: UpdateMilkDto) {
    return this.milkModel.findByIdAndUpdate(id, updateMilkDto);
  }

  remove(id: string) {
    return this.milkModel.deleteOne({ _id: id });
  }
}
