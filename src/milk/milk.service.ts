import { Injectable } from '@nestjs/common';
import { CreateMilkDto } from './dto/create-milk.dto';
import { UpdateMilkDto } from './dto/update-milk.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Milk } from './schemas/milk.schema';
import { Model } from 'mongoose';
import path from 'path';

@Injectable()
export class MilkService {
  constructor(
    @InjectModel(Milk.name) private readonly milkModel: Model<Milk>,
  ) {}

  create(createMilkDto: CreateMilkDto) {
    return this.milkModel.create(createMilkDto);
  }

  findAll() {
    return this.milkModel
      .find({})
      .populate('cattle_id')
      .populate({
        path: 'tech_worker_id',
        populate: {
          path: 'technique_id cowroom_id incharge_id',
        },
      });
  }

  findOne(id: string) {
    return this.milkModel
      .findOne({ _id: id })
      .populate('cattle_id')
      .populate({
        path: 'tech_worker_id',
        populate: {
          path: 'technique_id cowroom_id incharge_id',
        },
      });
  }

  update(id: string, updateMilkDto: UpdateMilkDto) {
  return this.milkModel.findByIdAndUpdate(id, updateMilkDto, { new: true });
  }

  remove(id: string) {
    return this.milkModel.deleteOne({ _id: id });
  }
}
