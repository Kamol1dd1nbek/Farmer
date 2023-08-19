import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTechInCowroomDto } from './dto/create-tech_in_cowroom.dto';
import { UpdateTechInCowroomDto } from './dto/update-tech_in_cowroom.dto';
import { Model, isValidObjectId } from 'mongoose';
import { TechInCowroom } from './schemas/tech_in_cowroom.schemas';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TechInCowroomService {
  constructor(@InjectModel(TechInCowroom.name) private readonly techInCowroomModel: Model<TechInCowroom>) {}

  create(createTechInCowroomDto: CreateTechInCowroomDto): Promise<TechInCowroom> {
    const { technique_id, cowroom_id, incharge_id } = createTechInCowroomDto;
    if ( !isValidObjectId(technique_id) || !isValidObjectId(cowroom_id) || !isValidObjectId(incharge_id) ) {
      throw new BadRequestException("Invalid Id");
    }
    return this.techInCowroomModel.create(createTechInCowroomDto);
  }

  async findAll(): Promise<TechInCowroom[]> {
    const techInCowrooms = await this.techInCowroomModel.find({}).populate("technique_id").populate("cowroom_id").populate("incharge_id");
    if (techInCowrooms.length === 0) {
      throw new NotFoundException("Table is empty")
    }
    return techInCowrooms;
  }

  async findOne(id: string): Promise<TechInCowroom> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException("Invalid Id");
    }
    const techInCowroom = await this.techInCowroomModel.findById(id).populate("technique_id").populate("cowroom_id").populate("incharge_id");
    if ( !techInCowroom ) {
      throw new NotFoundException("Table not found");
    }
    return techInCowroom;
  }

  async update(id: string, updateTechInCowroomDto: UpdateTechInCowroomDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException("Invalid Id");
    }
    const updatedTechInCowroom = await this.techInCowroomModel.findByIdAndUpdate(id, updateTechInCowroomDto);
    if ( !updatedTechInCowroom ) {
      throw new NotFoundException("Table not found");
    }
    return updatedTechInCowroom;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException("Invalid Id");
    }
    const removedTechInCowroom = await this.techInCowroomModel.findByIdAndDelete(id);
    if ( !removedTechInCowroom ) {
      throw new NotFoundException("Table not found");
    }
    return id;
  }
}
