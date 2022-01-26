import { Injectable } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}
  create(input: CreateUserInput) {
    return this.repo.save(input);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }
  // @TODO
  update(id: any, updateUserInput: UpdateUserInput) {
    return this.repo.update(updateUserInput, id);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
