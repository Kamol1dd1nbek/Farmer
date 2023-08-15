import { Injectable } from '@nestjs/common';
import { CreateCowroomTypeDto } from './dto/create-cowroom_type.dto';
import { UpdateCowroomTypeDto } from './dto/update-cowroom_type.dto';

@Injectable()
export class CowroomTypesService {
  create(createCowroomTypeDto: CreateCowroomTypeDto) {
    return 'This action adds a new cowroomType';
  }

  findAll() {
    return `This action returns all cowroomTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cowroomType`;
  }

  update(id: number, updateCowroomTypeDto: UpdateCowroomTypeDto) {
    return `This action updates a #${id} cowroomType`;
  }

  remove(id: number) {
    return `This action removes a #${id} cowroomType`;
  }
}
