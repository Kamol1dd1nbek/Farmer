import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CowroomType } from './schemas/cowroom_type.schema';
import { CreateCowroomTypeDto } from './dto/create-cowroom_type.dto';
import { UpdateCowroomTypeDto } from './dto/update-cowroom_type.dto';

@Injectable()
export class CowroomTypesService {
  constructor(
    @InjectModel(CowroomType.name) private cowroomTypeModel: Model<CowroomType> 
  ) {}

  async create(createCowroomTypeDto: CreateCowroomTypeDto): Promise<CowroomType> {
    let { name } = createCowroomTypeDto;
    name = name.toUpperCase();
    const cowroomType = await this.cowroomTypeModel.create({ ...createCowroomTypeDto, name });
    return cowroomType;
  }

  async findAll(): Promise<CowroomType[]> {
    const cowroomTypes = await this.cowroomTypeModel.find({});

    if ( cowroomTypes.length === 0 ) {
      throw new NotFoundException("CowroomTypes not found");
    }
    return cowroomTypes;
  }

  async findOne(id: string): Promise<CowroomType> {
    
    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const cowroomType = await this.cowroomTypeModel.findById(id);
    if ( !cowroomType ) {
      throw new NotFoundException(`CowroomType not found this id: ${id}`);
    }
    return cowroomType;
  }

  async update(id: string, updateCowroomTypeDto: UpdateCowroomTypeDto): Promise<CowroomType> {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const updatedCowroomType = await this.cowroomTypeModel.findOneAndUpdate({ _id: id }, updateCowroomTypeDto, { new: true });

    if ( !updatedCowroomType ) {
      throw new NotFoundException("CowroomType not found");
    }
    return updatedCowroomType;
  }

  async remove(id: string) {

    if ( !isValidObjectId(id) ) {
      throw new BadRequestException("Invalid Id");
    }

    const removedCowroomType = await this.cowroomTypeModel.findOneAndDelete({ _id: id });

    if ( !removedCowroomType ) {
      throw new NotFoundException("CowroomType not found");
    }
    return removedCowroomType;
  }
}