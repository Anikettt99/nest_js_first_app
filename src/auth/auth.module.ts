import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './login.strategy';

@Module({
  controllers: [AuthController],
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy], // we are only importing that is exporting by userModule i.e UserService
})
export class AuthModule {}
