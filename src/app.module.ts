import { Module } from '@nestjs/common';
import { UserController } from './user/controller';
import { UserModule } from './user/module';
import { userProviders } from './user/provider';
import { UserService } from './user/service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class AppModule {}
