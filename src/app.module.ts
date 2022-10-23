import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestjs',
      entities: [User],
      synchronize: true, // for development only
    }),
  ],
  // imports: [UserModule], // import other modules
})
export class AppModule {}
