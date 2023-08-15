import { Injectable } from '@nestjs/common';
import { CreateCowroomDto } from './dto/create-cowroom.dto';
import { UpdateCowroomDto } from './dto/update-cowroom.dto';

@Injectable()
export class CowroomService {
  create(createCowroomDto: CreateCowroomDto) {
    return 'This action adds a new cowroom';
  }

  findAll() {
    return `This action returns all cowroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cowroom`;
  }

  update(id: number, updateCowroomDto: UpdateCowroomDto) {
    return `This action updates a #${id} cowroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} cowroom`;
  }
}
