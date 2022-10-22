import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

//@Controller("/user") // it will set route prefix as /user
@Controller()
export class AppController {}
