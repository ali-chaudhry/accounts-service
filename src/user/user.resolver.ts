import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { omit as lodashOmit, omit } from 'lodash';
import { PasswordHasherService } from 'src/auth/password-hasher/password-hasher.service';
import { JwtService } from 'src/auth';
import * as moment from 'moment';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly passwordHashService: PasswordHasherService,
    private readonly jwtService: JwtService,
  ) {}

  @Query('login')
  public async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    //Verify User Email
    const emailVerification = await this.userService.findOne(email);
    console.log(emailVerification);
    if (!emailVerification) {
      throw new Error(`Can't find user with this ${email}`);
    }
    //Verify user Password,
    if (
      this.passwordHashService.comparePassword(
        password,
        emailVerification.password,
      )
    ) {
    } else {
      throw new Error('The password you entered is not valid');
    }
    //Generate JWT Token

   // const lastLogin = moment().utc().format('YYYY-MM-DD hh:mm:ss');

    const token = this.jwtService.sign(
      {
        ...omit(emailVerification),
      },
      { expiresIn: '7d' },
    );

    const { id } = emailVerification;
    const userUpdate = await this.userService.update({
      id,
      //lastLogin: lastLogin,
    });
    console.log(userUpdate);

    return { token,  userUpdate, emailVerification };
  }
  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation('createUser')
  public async createUser(@Args('input') input: any) {
    const existingUsers = !!(await this.userService.existingUser(
      input.email.toLowerCase(),
    ));
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
      });

      createUsers = await this.userService.create({
        ..._user,
        password: encriptedPassword,
        token: tokens,
      });
      const verifyToken = await this.jwtService.verify(tokens);

      // return {verifyToken, tokens };
    }
    return createUsers;
  }

  @Mutation('updateUser')
  update(@Args('id') id: string) {
    return this.userService.update(id);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string) {
    return this.userService.remove(id);
  }
}
