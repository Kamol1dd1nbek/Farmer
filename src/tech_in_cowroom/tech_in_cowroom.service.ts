import { Injectable } from '@nestjs/common';
import { CreateTechInCowroomDto } from './dto/create-tech_in_cowroom.dto';
import { UpdateTechInCowroomDto } from './dto/update-tech_in_cowroom.dto';

@Injectable()
export class TechInCowroomService {
  create(createTechInCowroomDto: CreateTechInCowroomDto) {
    return 'This action adds a new techInCowroom';
  }

  findAll() {
    return `This action returns all techInCowroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} techInCowroom`;
  }

  update(id: number, updateTechInCowroomDto: UpdateTechInCowroomDto) {
    return `This action updates a #${id} techInCowroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} techInCowroom`;
  }
}
