

import { Module,forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { User } from './entities/user.entity';
import { jwtAuthFactory } from 'src/utils/jwt.helper';
import { AuthModule } from 'src/auth/auth.module';
import { PasswordHasherService } from 'src/auth/password-hasher/password-hasher.service';
import { JwtModule} from 'src/auth';
import { JWT_MODULE_OPTIONS } from 'src/auth/jwt.constants';

@Module({
  imports: [TypeOrmModule.forFeature([User]),

  JwtModule.register({
    secret: JWT_MODULE_OPTIONS,
    signOptions: { expiresIn: '60s' },
  })
],
  providers: [UserResolver, UserService, PasswordHasherService],
})
export class UserModule {}
