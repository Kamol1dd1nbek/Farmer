import { Injectable } from '@nestjs/common';
import { CreateCattleDto } from './dto/create-cattle.dto';
import { UpdateCattleDto } from './dto/update-cattle.dto';

@Injectable()
export class CattleService {
  create(createCattleDto: CreateCattleDto) {
    return 'This action adds a new cattle';
  }

  findAll() {
    return `This action returns all cattle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cattle`;
  }

  update(id: number, updateCattleDto: UpdateCattleDto) {
    return `This action updates a #${id} cattle`;
  }

  remove(id: number) {
    return `This action removes a #${id} cattle`;
  }
}
