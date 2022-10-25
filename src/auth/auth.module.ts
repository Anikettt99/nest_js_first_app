import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [UserModule], // we are only importing that is exporting by userModule i.e UserService
})
export class AuthModule {}
