import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    // initiating user object sql one
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
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
