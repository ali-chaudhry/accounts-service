import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { omit as lodashOmit } from 'lodash';
import { PasswordHasherService } from 'src/auth/password-hasher/password-hasher.service';

import { JwtService } from 'src/auth';
import { omit as lodashOmit } from 'lodash';

import { JwtService } from '@nestjs/jwt';


@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly passwordHashService: PasswordHasherService,
    private readonly jwtService: JwtService,
  ) {}

  @Mutation('createUser')
  public async createUser(@Args('input') input: any) {
    const existingUsers = !!(await this.userService.existingUser(
      input.email.toLowerCase(),
    ));
    console.log(existingUsers);
    if (existingUsers) {
      throw new Error(`User is already registered on this ${input.email}`);
    }
    const _user = new User();
    _user.email = input.email.toLowerCase().trim().replaceAll(' ', '');
    _user.firstName = input.firstName;
    _user.lastName = input.lastName;
    _user.password = input.password;

    let createUsers: any;

    if (input.password) {
      _user.password = input.password;
      const encriptedPassword = await this.passwordHashService.hashPassword(
        input.password,
      );

      const tokens = this.jwtService.sign({
        ...lodashOmit(createUsers, ['encriptedPassword']),

      const token = this.jwtService.sign({
        ...lodashOmit(createUsers, ['password']),

      });

      createUsers = await this.userService.create({
        ..._user,
        password: encriptedPassword,

        token: tokens,
      });
      const verifyToken = await this.jwtService.verify(tokens);
      console.log(verifyToken);

        token,
      });

    }
    return createUsers;
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
