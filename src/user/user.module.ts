import { Module,forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import { jwtAuthFactory } from 'src/utils/jwt.helper';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { PasswordHasherService } from 'src/auth/password-hasher/password-hasher.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.registerAsync({
    useFactory: jwtAuthFactory
  }),
],
  providers: [UserResolver, UserService, PasswordHasherService],
})
export class UserModule {}
