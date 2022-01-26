import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
@Injectable()
export class PasswordHasherService {
public async hashPassword(password: string){
    return await bcrypt.hash(password, 13);
}


}
