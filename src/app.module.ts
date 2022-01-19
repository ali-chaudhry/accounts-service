import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [SupplierModule, UserModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
