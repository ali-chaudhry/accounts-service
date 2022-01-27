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

  remove(id: string) {
    return this.repo.delete(id);
  }
  public async user(id: string) {
    return await this.repo.findOne({ id, deleted: false });
  }

  public async update(input: any) {
  return await this.repo.save(input.id)
  }
  public async existingUser(email: string): Promise<User | undefined> {
    return this.repo.findOne({
      where: {
        email: `${email}`,
        deleted: false,
      },
    });
  }
}
