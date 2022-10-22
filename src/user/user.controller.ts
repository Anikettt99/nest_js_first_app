import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  /*private userService;
  constructor(userService: UserService) {
    this.userService = userService;
  }*/
  // same thing (by nest js)
  // private userService = new UserService();

  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    // return 'I am a User';

    return this.userService.get();
  }

  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }

  @Get('/:userId')
  getUser(@Req() req: Request, @Param() userId: number) {
    return this.userService.getById(req);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: string }) {
    return this.userService.remove(param);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    return this.userService.update(req, param);
  }
}
