import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Cowroom } from './schemas/cowroom.schema';
import { CreateCowroomDto } from './dto/create-cowroom.dto';
import { UpdateCowroomDto } from './dto/update-cowroom.dto';

@Injectable()
export class CowroomService {
  constructor(
    @InjectModel(Cowroom.name) private cowroomModel: Model<Cowroom> 
  ) {}

  async create(createCowroomDto: CreateCowroomDto): Promise<Cowroom> {
    let { name } = createCowroomDto;
    name = name.toUpperCase();
    const cowroom = await this.cowroomModel.create({ ...createCowroomDto, name });
    return cowroom;
  }

  async findAll(): Promise<Cowroom[]> {
    const cowrooms = await this.cowroomModel.find({}).populate("type_id");

    if ( cowrooms.length === 0 ) {
      throw new NotFoundException("Cowrooms not found");
    }
    return cowrooms;
  }

  async findOne(id: string): Promise<Cowroom> {
    
    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const cowroom = await this.cowroomModel.findById(id).populate("type_id");
    if ( !cowroom ) {
      throw new NotFoundException(`Cowroom not found this id: ${id}`);
    }
    return cowroom;
  }

  async update(id: string, updateCowroomDto: UpdateCowroomDto): Promise<Cowroom> {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const updatedCowroom = await this.cowroomModel.findOneAndUpdate({ _id: id }, updateCowroomDto, { new: true });

    if ( !updatedCowroom ) {
      throw new NotFoundException("Cowroom not found");
    }
    return updatedCowroom;
  }

  async remove(id: string) {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const removedCowroom = await this.cowroomModel.findOneAndDelete({ _id: id });

    if ( !removedCowroom ) {
      throw new NotFoundException("Cowroom not found");
    }
    return removedCowroom;
  }
}