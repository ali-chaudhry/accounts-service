import { Module } from '@nestjs/common';
import { MessegesService } from './messeges.service';
import { MessegesResolver } from './messeges.resolver';

@Module({
  providers: [MessegesResolver, MessegesService]
})
export class MessegesModule {}
