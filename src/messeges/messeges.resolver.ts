import { Resolver, Args, Subscription } from '@nestjs/graphql';
import { MessegesService } from './messeges.service';
import { CreateMessegeInput, UpdateMessegeInput } from '../graphql';

@Resolver('Messege')
export class MessegesResolver {
  constructor(private readonly messegesService: MessegesService) {}

  @Subscription('createMessege')
  create(@Args('createMessegeInput') createMessegeInput: CreateMessegeInput) {
    return this.messegesService.create(createMessegeInput);
  }

  @Subscription('updateMessege')
  update(@Args('updateMessegeInput') updateMessegeInput: UpdateMessegeInput) {
    return this.messegesService.update(updateMessegeInput);
  }

  @Subscription('removeMessege')
  remove(@Args('id') id: number) {
    return this.messegesService.remove(id);
  }
}
