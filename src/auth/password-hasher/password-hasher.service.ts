import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PasswordHasherService {
  public async hashPassword(password: string) {
    return await bcrypt.hash(password, 13);
  }
  public async comparePassword(password, encriptedPassword): Promise<boolean> {
    return await bcrypt.compare(password, encriptedPassword);
  }
}
