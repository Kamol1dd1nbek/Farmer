import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateCattleDto } from './dto/create-cattle.dto';
import { UpdateCattleDto } from './dto/update-cattle.dto';
import { Cattle } from './schemas/cattle.schema';

@Injectable()
export class CattleService {
  constructor(
    @InjectModel(Cattle.name) private cattleModel: Model<Cattle> 
  ) {}

  async create(createCattleDto: CreateCattleDto): Promise<Cattle> {

    if (
      !isValidObjectId(createCattleDto.herd_id) 
    ) {
      throw new BadRequestException("Invalid Id");
    }

    if ( createCattleDto.mother_id ) {
      if (!isValidObjectId(createCattleDto.mother_id)) {
        throw new BadRequestException("Invalid Id");
      }
    }

    const cattle = await this.cattleModel.create( createCattleDto );
    return cattle;
  }

  async findAll(): Promise<Cattle[]> {
    const cattles = await this.cattleModel.find({}).populate("mother_id").populate("herd_id");

    if ( cattles.length === 0 ) {
      throw new NotFoundException("Cattles not found");
    }
    return cattles;
  }

  async findOne(id: string): Promise<Cattle> {
    
    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const cattle = await this.cattleModel.findById(id).populate("mother_id").populate("herd_id");
    if ( !cattle ) {
      throw new NotFoundException(`Cattle not found this id: ${id}`);
    }
    return cattle;
  }

  async update(id: string, updateCattleDto: UpdateCattleDto): Promise<Cattle> {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const updatedCattle = await this.cattleModel.findOneAndUpdate({ _id: id }, updateCattleDto, { new: true });

    if ( !updatedCattle ) {
      throw new NotFoundException("Cattle not found");
    }
    return updatedCattle;
  }

  async remove(id: string) {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const removedCattle = await this.cattleModel.findOneAndDelete({ _id: id });

    if ( !removedCattle ) {
      throw new NotFoundException("Cattle not found");
    }
    return removedCattle;
  }
}