import { Resolver, Args, Subscription } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { CreateMessageInput, UpdateMessageInput } from '../graphql';

@Resolver('Message')
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Subscription('createMessage')
  create(@Args('createMessageInput') createMessageInput: CreateMessageInput) {
    return this.messagesService.create(createMessageInput);
  }

  @Subscription('updateMessage')
  update(@Args('updateMessageInput') updateMessegeInput: UpdateMessageInput) {
    return this.messagesService.update(updateMessegeInput);
  }

  @Subscription('removeMessage')
  remove(@Args('id') id: number) {
    return this.messagesService.remove(id);
  }
}
