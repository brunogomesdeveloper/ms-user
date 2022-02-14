import { Module } from '@nestjs/common';
import { UserService } from './service';
import { UserController } from './controller';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
