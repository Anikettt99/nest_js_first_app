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
  update(updateUserDto: UpdateUserDto, param: { userId: number }) {
    return { body: updateUserDto, param: param.userId };
  }

  getById(req: Request) {
    return req.params;
  }

  remove(param: { userId: string }) {
    return param.userId + 'This will be deleted';
  }
}
