import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Role } from './schemas/role.schema';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    let { name } = createRoleDto;
    name = name.toUpperCase();
    const role = await this.roleModel.create({ ...createRoleDto, name });
    return role;
  }

  async findAll(): Promise<Role[]> {
    const roles = await this.roleModel.find({});

    if (roles.length === 0) {
      throw new NotFoundException('Roles not found');
    }
    return roles;
  }

  async findOne(id: string): Promise<Role> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid Id');
    }

    const role = await this.roleModel.findById(id);
    if (!role) {
      throw new NotFoundException(`Role not found this id: ${id}`);
    }
    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid Id');
    }

    const updatedRole = await this.roleModel.findOneAndUpdate(
      { _id: id },
      updateRoleDto,
      { new: true },
    );

    if (!updatedRole) {
      throw new NotFoundException('Role not found');
    }
    return updatedRole;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid Id');
    }

    const removedRole = await this.roleModel.findOneAndDelete({ _id: id });

    if (!removedRole) {
      throw new NotFoundException('Role not found');
    }
    return removedRole;
  }
}
