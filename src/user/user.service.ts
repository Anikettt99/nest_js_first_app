import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return 'I am a User';
  }

  create(req: Request) {
    return req.body;
  }
  update(req: Request, param: { userId: number }) {
    return { body: req.body, param: param.userId };
  }

  getById(req: Request) {
    return req.params;
  }

  remove(param: { userId: string }) {
    return param.userId + 'This will be deleted';
  }
}
