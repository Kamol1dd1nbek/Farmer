import { Injectable } from '@nestjs/common';
import { CreateHerdDto } from './dto/create-herd.dto';
import { UpdateHerdDto } from './dto/update-herd.dto';

@Injectable()
export class HerdService {
  create(createHerdDto: CreateHerdDto) {
    return 'This action adds a new herd';
  }

  findAll() {
    return `This action returns all herd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} herd`;
  }

  update(id: number, updateHerdDto: UpdateHerdDto) {
    return `This action updates a #${id} herd`;
  }

  remove(id: number) {
    return `This action removes a #${id} herd`;
  }
}
