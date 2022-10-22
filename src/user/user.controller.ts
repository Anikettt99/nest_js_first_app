import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  /*private userService;
  constructor(userService: UserService) {
    this.userService = userService;
  }*/
  // same thing (by nest js)
  // private userService = new UserService();

  // userService is injected here..we don't need to initiate the
  // userService class
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    // return 'I am a User';

    return this.userService.get();
  }

  /* @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }*/

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /* @Get('/:userId')
  getUser(@Req() req: Request, @Param() userId: number) {
    return this.userService.getById(req);
  }*/

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getById(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.remove(userId);
  }

  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }
}
