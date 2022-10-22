import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  get() {
    return 'I am a User';
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, param: userId };
  }

  getById(userId: number) {
    return { userId };
  }

  remove(userId: number) {
    return userId + 'This will be deleted';
  }
}
