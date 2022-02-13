import { Module } from '@nestjs/common';
import { UserController } from './user/controller';
import { UserModule } from './user/module';
import { userProviders } from './user/provider';
import { UserService } from './user/service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class AppModule {}
