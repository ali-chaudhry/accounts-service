import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  public async createUser(@Args('input') input: any) {
    const newUsers = await this.userService.create(input);
    return newUsers;
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }
  @Mutation('updateUser')
  update(@Args('input') input: UpdateUserInput) {
    return this.userService.update(input.id, input);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}
