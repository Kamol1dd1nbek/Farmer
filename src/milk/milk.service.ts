import { Injectable } from '@nestjs/common';
import { CreateMilkDto } from './dto/create-milk.dto';
import { UpdateMilkDto } from './dto/update-milk.dto';

@Injectable()
export class MilkService {
  create(createMilkDto: CreateMilkDto) {
    return 'This action adds a new milk';
  }

  findAll() {
    return `This action returns all milk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} milk`;
  }

  update(id: number, updateMilkDto: UpdateMilkDto) {
    return `This action updates a #${id} milk`;
  }

  remove(id: number) {
    return `This action removes a #${id} milk`;
  }
}
