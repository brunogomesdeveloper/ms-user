import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.provider';
import { UserService } from './user/user.service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class AppModule {}
