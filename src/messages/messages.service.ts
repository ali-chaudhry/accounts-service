import { Injectable } from '@nestjs/common';
import { CreateMessageInput, UpdateMessageInput } from '../graphql';

@Injectable()
export class MessagesService {
  create(createMessegeInput: CreateMessageInput) {
    return createMessegeInput;
  }

  findAll() {
    return `This action returns all messeges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messege`;
  }

  update(updateMessegeInput: UpdateMessageInput) {
    return `This action updates a #${updateMessegeInput.id} messege`;
  }

  remove(id: number) {
    return `This action removes a #${id} messege`;
  }
}
