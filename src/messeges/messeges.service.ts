import { Injectable } from '@nestjs/common';
import { CreateMessegeInput, UpdateMessegeInput } from '../graphql';

@Injectable()
export class MessegesService {
  create(createMessegeInput: CreateMessegeInput) {
    return createMessegeInput;
  }

  findAll() {
    return `This action returns all messeges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messege`;
  }

  update(updateMessegeInput: UpdateMessegeInput) {
    return `This action updates a #${updateMessegeInput.id} messege`;
  }

  remove(id: number) {
    return `This action removes a #${id} messege`;
  }
}
