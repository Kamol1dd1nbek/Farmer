import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Herd } from './schemas/herd.schema';
import { CreateHerdDto } from './dto/create-herd.dto';
import { UpdateHerdDto } from './dto/update-herd.dto';

@Injectable()
export class HerdService {
  constructor(
    @InjectModel(Herd.name) private herdModel: Model<Herd> 
  ) {}

  async create(createHerdDto: CreateHerdDto): Promise<Herd> {
    let { name } = createHerdDto;
    name = name.toUpperCase();
    const herd = await this.herdModel.create({ ...createHerdDto, name });
    return herd;
  }

  async findAll(): Promise<Herd[]> {
    const herds = await this.herdModel.find({}).populate("supervisor_id");

    if ( herds.length === 0 ) {
      throw new NotFoundException("Herds not found");
    }
    return herds;
  }

  async findOne(id: string): Promise<Herd> {
    
    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const herd = await this.herdModel.findById(id).populate("supervisor_id");
    if ( !herd ) {
      throw new NotFoundException(`Herd not found this id: ${id}`);
    }
    return herd;
  }

  async update(id: string, updateHerdDto: UpdateHerdDto): Promise<Herd> {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }
    
    const updatedHerd = await this.herdModel.findOneAndUpdate({ _id: id }, updateHerdDto, { new: true });

    if ( !updatedHerd ) {
      throw new NotFoundException("Herd not found");
    }
    return updatedHerd;
  }

  async remove(id: string) {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const removedHerd = await this.herdModel.findOneAndDelete({ _id: id });

    if ( !removedHerd ) {
      throw new NotFoundException("Herd not found");
    }
    return removedHerd;
  }
}