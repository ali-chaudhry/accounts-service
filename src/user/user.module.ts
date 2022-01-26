import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import { PasswordHasherService } from 'src/auth/password-hasher/password-hasher.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),],
  
  providers: [UserResolver, UserService, PasswordHasherService],
})
export class UserModule {}
