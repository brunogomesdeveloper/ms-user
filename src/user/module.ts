import { Module } from '@nestjs/common';
import { UserService } from './service';
import { UserController } from './controller';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
