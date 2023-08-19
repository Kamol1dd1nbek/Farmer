import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTechniqueDto } from './dto/create-technique.dto';
import { UpdateTechniqueDto } from './dto/update-technique.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Technique } from './schemas/technique.schema';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class TechniqueService {
  constructor(
    @InjectModel(Technique.name) private readonly techModel: Model<Technique>,
  ) {}

  create(createTechniqueDto: CreateTechniqueDto) {
    return 'This action adds a new technique';
  }

  async findAll(): Promise<Technique[]> {
    const techs = await this.techModel.find({});
    if (techs.length === 0) {
      throw new NotFoundException('Techniques not found');
    }
    return techs;
  }

  async findOne(id: string): Promise<Technique> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid Id');
    }
    const tech = await this.techModel.findById(id);
    if (!tech) {
      throw new NotFoundException('Technique not found');
    }
    return tech;
  }

  async update(
    id: string,
    updateTechniqueDto: UpdateTechniqueDto,
  ): Promise<Technique> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid Id');
    }
    const updatedTech = await this.techModel.findByIdAndUpdate(
      id,
      updateTechniqueDto,
      { new: true },
    );
    if (!updatedTech) {
      throw new NotFoundException('Technique not found');
    }
    return updatedTech;
  }

  async remove(id: string): Promise<string> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid Id');
    }
    const removedTech = await this.techModel.findByIdAndDelete(id);
    if (!removedTech) {
      throw new NotFoundException('Technique not found');
    }
    return id;
  }
}
